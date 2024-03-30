declare namespace League {
    namespace LCU {
        namespace websocket {
            namespace lolGameflow {
                namespace v1 {
                    namespace gameflowPhase {
                        
                        type updateData = "Matchmaking" | "ReadyCheck" | "Lobby" | "InProgress" | "WaitingForStats" | "PreEndOfGame" | "EndOfGame";
                        
                        type EventData = UpdateEvent<updateData>;
                    
                    }
                }
            }

            interface EventMap {
                "/lol-gameflow/v1/gameflow-phase": lolGameflow.v1.gameflowPhase.EventData;
            }
        }
    }
}