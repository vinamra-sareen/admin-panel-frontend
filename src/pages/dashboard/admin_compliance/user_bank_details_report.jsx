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
import { Form, Field, FormElement } from "@progress/kendo-react-form";
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
  };

  handleSearch = () => {
    const { user_id, start_date, end_date } = this.state;
    let data = { user_id, from_date: start_date, to_date: end_date };
    getUserBankReportDetails(data)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          this.setState({ data: res.data.res, total: res.data.res.length });
        } else {
          console.log(res);
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
    let data = { user_id: "2703202" };
    getUserBankReportDetails()
      .then((res) => {
        if (res.status === 200) {
          this.setState({ data: res.data.res, total: res.data.res.length });
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.error(err));
  }

  render() {
    const handleSearch = (data) => {
      getUserBankReportDetails(data)
        .then((res) => {
          if (res.status === 200) {
            // setData(res.data.res);
            console.log(res);
            this.setState({ data: res.data.res, total: res.data.res.length });
          } else {
            console.log(res);
          }
        })
        .catch((err) => console.error(err));
    };

    let { skip, take, data, filter } = this.state;
    const grid = (
      <Grid
        data={data && filterBy(data.slice(skip, take + skip), filter)}
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
        <Column field="request_by" title="Request By" filter="text" />
        <Column field="modified_on" title="Request Date" filter={"date"} />
        <Column field="first_name" title="New Name" filter="text" />
        <Column
          field="account_number"
          title="Old Account Number"
          filter={"numeric"}
        />
        <Column field="IFSC" title="New IFSC Code" filter="text" />
        <Column field="account_type" title="New Account Type" filter="text" />
        <Column field="status" title="Status" filter="text" />
        <Column field="approved_by" title="Approved By" filter="text" />
        <Column field="linux_added_on" title="Approval Date" filter={"date"} />
      </Grid>
    );
    return (
      <>
        <div className="container w-11/12 m-10">
          <h1 className="font-semibold text-xl leading-6 text-blueGray-900 m-5">
            User Bank Details Report
          </h1>

          <div className="m-5">
            <div className="my-10">
              {/* <Form
                onSubmit={handleSearch}
                render={(formRenderProps) => (
                  <FormElement style={{ maxWidth: 450 }}>
                    <Field
                      placeholder={"Search By User ID"}
                      name="user_id"
                      component={Input}
                    />
                    <Field
                      placeholder={"From Date"}
                      name="from_date"
                      component={DatePicker}
                    />
                    <Field
                      placeholder={"To Date"}
                      name="to_date"
                      component={DatePicker}
                    />
                    <div className="k-form-buttons">
                      <button
                        type={"submit"}
                        className="k-button"
                        disabled={!formRenderProps.allowSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </FormElement>
                )}
              /> */}

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
        </div>
      </>
    );
  }
}

export default Demo;
