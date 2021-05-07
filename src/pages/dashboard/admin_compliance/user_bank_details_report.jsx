import * as React from "react";
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { Input } from "@progress/kendo-react-inputs";
import { GridPDFExport } from "@progress/kendo-react-pdf";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Button } from "@progress/kendo-react-buttons";
import { filterBy } from "@progress/kendo-data-query";
import { Notification } from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";
import { Loader } from "@progress/kendo-react-indicators";
import { getUserBankReportDetails } from "../../../_services/admin";

class Demo extends React.Component {
  gridPDFExport;
  _export;
  export = () => {
    this._export.save();
  };
  pageSize = 5;

  state = {
    data: [],
    skip: 0,
    exporting: false,
    total: 0,
    take: 10,
    filter: {
      logic: "and",
      filters: [{ field: "user_name", operator: "contains", value: "" }],
    },
    user_id: null,
    from_date: null,
    to_date: null,
    loading: false,
    error: false,
  };

  handleSearch = () => {
    this.setState({ loading: true });

    const { user_id, start_date, end_date } = this.state;
    let data = { user_id, from_date: start_date, to_date: end_date };
    getUserBankReportDetails(data)
      .then((res) => {
        if (res.status === 200) {
          this.setState({ loading: false });
          this.setState({ data: res.data.res, total: res.data.res.length });
        } else {
          this.setState({ loading: false });
          this.setState({ error: true });
        }
      })
      .catch((err) => console.error(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  pageChange = (event) => {
    this.setState({ skip: event.page.skip, take: event.page.take });
  };

  exportPDF = () => {
    this.gridPDFExport.save(this.state.data, this.pdfExportDone);

    this.setState({ exporting: true });
  };

  pdfExportDone = () => {
    this.setState({ exporting: false });
  };

  componentDidMount() {
    this.setState({ loading: true });
    getUserBankReportDetails()
      .then((res) => {
        if (res.status === 200) {
          this.setState({ data: res.data.res, total: res.data.res.length });
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false });
          this.setState({ error: true });
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
        this.setState({ error: true });
      });
  }

  render() {
    let { skip, take, data, filter, loading } = this.state;
    data = filterBy(data, filter);
    const grid = (
      <Grid
        data={data && data.slice(skip, take + skip)}
        sortable={true}
        pageable={true}
        filterable={true}
        skip={skip}
        take={take}
        total={data.length}
        pageSize={this.pageSize}
        filter={filter}
        onPageChange={this.pageChange}
        onFilterChange={(e) => {
          this.setState({
            filter: e.filter,
          });
        }}
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
        <Column field="user_name" title="Username" filter="text" />
        <Column field="requested_by" title="Request By" filter="text" />
        <Column field="modified_on" title="Request Date" filter="date" format="{0:D}" />
        <Column field="first_name" title="First Name" filter="text" />
        <Column field="account_number" title="Account No." filter={"numeric"} />
        <Column field="IFSC" title="IFSC Code" filter="text" />
        <Column field="account_type" title="Account Type" filter="text" />
        <Column field="status" title="Status" filter="text" />
        <Column field="approved_by" title="Approved By" filter="text" />
        <Column
          field="linux_added_on"
          title="Approval Date"
          filter={"date"}
          style={{ "font-size": "10px" }}
        />
      </Grid>
    );
    return (
      <>
        <div className="container w-full mt-10">
          {loading && (
            <div className="container w-10/12 absolute z-40 h-screen flex justify-center items-center margin-auto backdrop-filter backdrop-grayscale backdrop-blur-sm backdrop-contrast-100">
              <Loader size="large" type="converging-spinner" />
            </div>
          )}
          <h1 className="font-semibold text-xl leading-6 text-blueGray-900 m-5">
            User Bank Details Report
          </h1>

          <div className="m-5">
            <div className="my-10">
              <Input
                placeholder={"Search By User ID"}
                defaultValue={""}
                onChange={this.handleChange}
                name="user_id"
              />
              <DatePicker
                className="ml-2"
                defaultValue={new Date()}
                format="dd-MM-yyyy"
                value={this.state.start_date}
                onChange={this.handleChange}
                name="start_date"
              />
              <DatePicker
                className="ml-2"
                defaultValue={new Date()}
                format="dd-MM-yyyy"
                value={this.state.end_date}
                onChange={this.handleChange}
                name="end_date"
              />
              <Button
                className="ml-5"
                primary={true}
                onClick={this.handleSearch}
              >
                Search
              </Button>
            </div>
            {grid}
            <ExcelExport
              data={this.state.data}
              ref={(exporter) => (this._export = exporter)}
            >
              <GridPDFExport
                ref={(pdfExport) => (this.gridPDFExport = pdfExport)}
              >
                {grid}
              </GridPDFExport>
            </ExcelExport>
          </div>
          <div className="absolute right-0">
            <Fade enter={true} exit={true}>
              {this.state.error && (
                <Notification
                  className="mt-10"
                  type={{ style: "error", icon: true }}
                  closable={true}
                  onClose={() => this.setState({ error: false })}
                >
                  <span>Network Error</span>
                </Notification>
              )}
            </Fade>
          </div>
        </div>
      </>
    );
  }
}

export default Demo;
