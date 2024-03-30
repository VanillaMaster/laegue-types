declare namespace League {
    namespace LCU {
        namespace websocket {
            namespace lolMatchmaking {
                namespace v1 {
                    namespace readyCheck {
    
                        interface updateData {
                            declinerIds: number[];
                            dodgeWarning: "None" | "Warning";
                            playerResponse: "None" | "Accepted" | "Declined";
                            state: "InProgress" | "EveryoneReady";
                            suppressUx: boolean
                            timer: number
                        }
        
                        type EventData = UpdateEvent<updateData> | DeleteEvent<null>;
                    
                    }
                }
            }
    
            interface EventMap {
                "/lol-matchmaking/v1/ready-check": lolMatchmaking.v1.readyCheck.EventData;
            }
        }
    }
}