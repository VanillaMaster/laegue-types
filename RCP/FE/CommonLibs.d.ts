declare namespace League {
    namespace RCP {
        namespace FE {

            interface CommonLibs {
                championAssetsManager: unknown;
                deepFreeze: unknown;
                getBluebird: unknown;
                getComponentFactory: unknown;
                getD3: unknown;
                getDataBinding: unknown;
                getDataBindingApi: unknown;
                getGsap: unknown;
                getGsapCustomEase: unknown;
                getHtmlSanitizer: unknown;
                getJquery: unknown;
                getLodash: unknown;
                getLottie: unknown;
                getPatcherEvents: unknown;
                getRamda: unknown;
                getTelemetry: unknown;
                getWebComponents: unknown;
                getWindowMessenger: unknown;
                logging: unknown;
                playerNameComponentLogic: unknown;
                playerNames: unknown;
                rarityManager: unknown;
            }

        }

        interface PluginMap {
            "rcp-fe-common-libs": RCP.FE.CommonLibs;
        }
    }
}