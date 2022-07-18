import {generatePath} from "react-router";
import {Action, Store} from "redux";
import i18n from "./i18n";

const locale = (): string => i18n.language.substring(0, 2);

interface IBaseRoutes {
 
}

export let routerSwitchRoutes: () => IBaseRoutes = () => ({
  
});

// https://stackoverflow.com/questions/48215950/exclude-property-from-type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type RoutesLinks = IBaseRoutes;

export const routesLinks: () => RoutesLinks = () => (
     {
    //     ...routerSwitchRoutes(),
    //     home: generatePath(routerSwitchRoutes().home, {
    //         locale: locale(),
    //         location: 'lahore',
    //         specialty: 'test',
    //     }),
    //     search: generatePath(routerSwitchRoutes().search, {
    //         locale: locale(),
    //         location: 'lahore',
    //         specialty: 'test',
    //     }),
    //     doctor: generatePath(routerSwitchRoutes().doctor, {
    //         doctorName: locale(),
    //         id: locale(),
    //     }),
    //     doctor1: generatePath(routerSwitchRoutes().doctor1, {
    //         id: locale(),
    //     }),
    //     offer: generatePath(routerSwitchRoutes().offer, {
    //         offerName: locale(),
    //         offerId: locale(),
    //     }),
    //     offer1: generatePath(routerSwitchRoutes().offer1, {
    //         location: locale(),
    //         specialty: locale(),
    //     }),
    //     chat: generatePath(routerSwitchRoutes().chat, {
    //         location: locale(),
    //         specialty: locale(),
    //     }),
    }
);

export type ActionToDispatch = (urlParams, store?: Store) => Action;
export type ActionsToDispatch = ActionToDispatch[];

export interface IRouteHandlerActionsOnLoad {
    actionsToDispatch: ActionsToDispatch;
    route: string;
}

export type RoutesHandlerActionsOnLoad = IRouteHandlerActionsOnLoad[];

export const routesHandlerActionsOnLoad: RoutesHandlerActionsOnLoad = [

];
