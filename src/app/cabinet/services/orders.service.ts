import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductInterface } from 'src/app/core/services/api-response-types';

interface IOrderItem {
    orderDate: Date,
    orderNumber: number,
    product: ProductInterface,
    _id: string
}

@Injectable({ providedIn: 'root' })

export class OrdersService {
    private backendUrl = 'https://evergreen-purrfect-agenda.glitch.me';

    constructor(private http: HttpClient) { }

    private orderslistItemsSubject = new BehaviorSubject<any[]>([]);
    orderslistItems$: Observable<any[]> = this.orderslistItemsSubject.asObservable();

    setOrdersListItems(data: any) {
        console.log('data', data)
        this.orderslistItemsSubject.next(data)
        this.sortOrdersListByDateDesc()
    }

    addToOrdersList(productId: string):Observable<{message: string}> {
        const apiUrl = `${this.backendUrl}/add-to-orderslist/${productId}` 
        const token = localStorage.getItem('authToken');
        const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
        const options = {
            headers,
            withCredentials: true
        };
        return this.http.post<{message: string}>(apiUrl, null, options);
    }

    sortOrdersListByDateDesc() {
        this.orderslistItemsSubject.next([...this.orderslistItemsSubject.value.sort((a, b) => {
            // Сортування за спаданням за датою
            return new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime();
        })]);
    }

    getOrdersProdsList() {
        const apiUrl = `${this.backendUrl}/orderslist`;
        const token = localStorage.getItem('authToken');
        const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    
        return this.http.get<{products: IOrderItem[]}>(apiUrl, { headers, withCredentials: true })
    }


}