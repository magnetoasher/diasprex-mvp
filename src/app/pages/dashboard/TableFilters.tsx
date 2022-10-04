import { Select, Input } from "antd"
export const TableFilters = (props: any) => {
    const { Option } = Select;
    return (
        <div className="d-flex">
            <div>
                <Select defaultValue="All" style={{ width: 130 }} onChange={(e) => props.handleChange(e)} >
                    {
                        props.filterStatus.map((e: any) =>
                            <Option value={e}>{e}</Option>
                        )
                    }
                </Select>
                <label style={{ display: "block", color: "#b9b9b9" }}>
                    Filter By Status
                </label>

            </div>
            <div className='px-5'>
                <Select defaultValue="All" style={{ width: 130 }} />
                <label style={{ display: "block", color: "#b9b9b9" }}>
                    Filter By Condition
                </label>
            </div>
            <div>

                <Input placeholder='Search' style={{ width: 130 }} />
                <label style={{ display: "block", color: "#b9b9b9" }}>
                    Search In All Fields
                </label>
            </div>
        </div>
    )
}