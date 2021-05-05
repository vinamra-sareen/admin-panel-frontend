import * as React from "react";
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import { Input } from "@progress/kendo-react-inputs";
import { GridPDFExport } from "@progress/kendo-react-pdf";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Button } from "@progress/kendo-react-buttons";
import products from "./products.json";
import {
  ColumnMenu,
  ColumnMenuCheckboxFilter,
} from "../../../components/base/columnMenu";
import { getUserBankReportDetails } from "../../../_services/admin";

const createDataState = (dataState) => {
  return {
    result: process(products.slice(0), dataState),
    dataState: dataState,
  };
};

class UserBankDetailsReport extends React.Component {
  gridPDFExport;
  _export;
  export = () => {
    this._export.save();
  };
  state = createDataState({
    take: 8,
    skip: 0,
    user_id: "",
    from_date: new Date(),
    to_date: new Date(),
  });

  dataStateChange = (event) => {
    this.setState(createDataState(event.dataState));
  };

  exportPDF = () => {
    // Simulate a response from a web request.
    setTimeout(() => {
      this.gridPDFExport.save(products, this.pdfExportDone);
    }, 250);

    this.setState({ exporting: true });
  };

  pdfExportDone = () => {
    this.setState({ exporting: false });
  };

  handleSearch = (e) => {
    console.log(this.state);
  };

  componentDidMount() {
    let data = { user_id: "2703202" };
    getUserBankReportDetails(data)
      .then((res) => {
        if (res.status === 200) {
          // setData(res.data.res);
          console.log(res);
          this.setState({ results: res.data.res });
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.error(err));
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const grid = (
      <>
        {/* <Grid
          data={this.state.result}
          {...this.state.dataState}
          onDataStateChange={this.dataStateChange}
          sortable={true}
          pageable={true}
          pageSize={8}
        >
          <GridToolbar>
            <button
              title="Export PDF"
              className="k-button k-primary"
              onClick={this.exportPDF}
              disabled={this.state.exporting}
            >
              Export PDF
            </button>
            <button
              title="Export Excel"
              className="k-button k-primary"
              onClick={this.export}
            >
              Export to Excel
            </button>
          </GridToolbar>
          <Column
            field="ProductID"
            title="Product Id"
            filter={"numeric"}
            columnMenu={ColumnMenu}
          />
          <Column field="ProductName" columnMenu={ColumnMenuCheckboxFilter} />
          <Column
            field="UnitPrice"
            filter={"numeric"}
            columnMenu={ColumnMenu}
          />
          <Column
            field="Discontinued"
            filter={"boolean"}
            columnMenu={ColumnMenuCheckboxFilter}
          />
        </Grid> */}
        <Grid
          data={this.state.results}
          sortable={true}
          pageable={true}
          pageSize={8}
        >
          <GridToolbar>
            <button
              title="Export PDF"
              className="k-button k-primary"
              onClick={this.exportPDF}
              disabled={this.state.exporting}
            >
              Export PDF
            </button>
            <button
              title="Export Excel"
              className="k-button k-primary"
              onClick={this.export}
            >
              Export to Excel
            </button>
          </GridToolbar>
          <Column
            field="user_name"
            title="Username"
            columnMenu={ColumnMenuCheckboxFilter}
          />
          <Column
            field="request_by"
            title="Request By"
            columnMenu={ColumnMenuCheckboxFilter}
          />
          <Column
            field="modified_on"
            title="Request Date"
            filter={"date"}
            columnMenu={ColumnMenu}
          />
          <Column
            field="first_name"
            title="New Name"
            columnMenu={ColumnMenuCheckboxFilter}
          />
          <Column
            field="account_number"
            title="Old Account Number"
            filter={"numeric"}
            columnMenu={ColumnMenu}
          />
          <Column
            field="IFSC"
            title="New IFSC Code"
            columnMenu={ColumnMenuCheckboxFilter}
          />
          <Column
            field="account_type"
            title="New Account Type"
            columnMenu={ColumnMenuCheckboxFilter}
          />
          <Column
            field="status"
            title="Status"
            columnMenu={ColumnMenuCheckboxFilter}
          />
          <Column
            field="approved_by"
            title="Approved By"
            columnMenu={ColumnMenuCheckboxFilter}
          />
          <Column
            field="linux_added_on"
            title="Approval Date"
            filter={"date"}
            columnMenu={ColumnMenu}
          />
        </Grid>
      </>
    );

    let { user_id = "", from_date, to_date } = this.state;

    return (
      <div className="container w-11/12 m-10">
        <h1 className="font-semibold text-xl leading-6 text-blueGray-900 m-5">
          User Bank Details Report
        </h1>

        <div className="m-5">
          <div className="my-10">
            <Input
              placeholder={"Search By User ID"}
              defaultValue={user_id}
              onChange={this.handleChange}
            />
            <DatePicker
              className="ml-2"
              defaultValue={new Date()}
              format="dd-MM-yyyy"
              value={from_date}
              onChange={this.handleChange}
            />
            <DatePicker
              className="ml-2"
              defaultValue={new Date()}
              format="dd-MM-yyyy"
              value={to_date}
              onChange={this.handleChange}
            />
            <Button className="ml-5" primary={true} onClick={this.handleSearch}>
              Search
            </Button>
          </div>

          <ExcelExport
            data={products}
            ref={(exporter) => (this._export = exporter)}
          >
            {grid}
          </ExcelExport>
          <GridPDFExport
            ref={(pdfExport) => (this.gridPDFExport = pdfExport)}
            margin="1cm"
          >
            {grid}
          </GridPDFExport>
        </div>
      </div>
    );
  }
}

export default UserBankDetailsReport;
