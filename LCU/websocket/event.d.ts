declare namespace League {
    namespace LCU {
        namespace websocket {
            
            interface CreateEvent<T> {
                data: T;
                uri: string;
                eventType: 'Create';
            }
    
            interface UpdateEvent<T> {
                data: T;
                uri: string;
                eventType: 'Update';
            }
            
            interface DeleteEvent<T> {
                data: T;
                uri: string;
                eventType: 'Delete';
            }
            
        }
    }
}