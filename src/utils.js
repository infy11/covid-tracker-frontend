import {latLongMap} from "./latLongMap";

export const getSearchFilters = () => {
    return latLongMap.map(item=>{
        return {
            text: item.state,
            value: item.state,
        }
    })
}

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
