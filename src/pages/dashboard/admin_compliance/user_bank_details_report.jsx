import * as React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from '@progress/kendo-data-query';
import { orderBy } from "@progress/kendo-data-query";
import products from "./products.json";
import {ColumnMenu, ColumnMenuCheckboxFilter} from "../../../components/base/columnMenu";
const createDataState = (dataState) => {
    return {
        result: process(products.slice(0), dataState),
        dataState: dataState
    };
}

class UserBankDetailsReport extends React.Component {

    state = createDataState({
        take: 8,
        skip: 0
    });

    dataStateChange = (event) => {
        this.setState(createDataState(event.dataState));
    }

    render() {
        return (
          <Grid
            data={this.state.result}
            {...this.state.dataState}
            onDataStateChange={this.dataStateChange}
            sortable={true}
            pageable={true}
            pageSize={8}
            >
            <Column field="ProductID" title="Product Id" filter={'numeric'} columnMenu={ColumnMenu} />
            <Column field="ProductName" columnMenu={ColumnMenuCheckboxFilter} />
            <Column field="UnitPrice" filter={'numeric'} columnMenu={ColumnMenu} />
            <Column field="Discontinued" filter={'boolean'} columnMenu={ColumnMenuCheckboxFilter} />
          </Grid>
        );
    }
}

export default UserBankDetailsReport;

