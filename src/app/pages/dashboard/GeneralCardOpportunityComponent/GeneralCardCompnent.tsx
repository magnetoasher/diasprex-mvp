import { Button, Tooltip } from "antd";
import { useNavigate, Link } from "react-router-dom";
const GeneralOpportunityCard = (props: any) => {
    console.log(props.src);
    const history = useNavigate();
    const TruncateText = (truncateText: any, stringLength: any) => {
        return truncateText.length > stringLength
            ? truncateText.substr(0, stringLength) + "..."
            : truncateText;
    };

    return (
        <div className="card-body " >
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>

                <div className="fw-bolder text-dark"
                    style={{ display: "flex", alignItems: "end" }}
                >
                    <img height={140} width={120} style={{
                        borderRadius: "0px", objectFit: 'cover'
                    }} src={props.src} alt="image" className="p-3" />

                </div>
                <label style={{
                    fontSize: "18px",
                    marginLeft: "20px",
                    fontWeight: "600"
                }}>{props.title}</label>
            </div>

            <div className="text-gray-400 fw-bold fs-5 mt-1 mb-7">
                <label style={{
                    color: "black",
                    fontWeight: 600
                }}> Summary: </label>
                <label style={{
                    display: "inline",
                    color: "black",
                }}>
                    <Tooltip placement="bottom" title={props.summary}>
                        {props.summary ? TruncateText(props.summary, 150) : ""}

                    </Tooltip>
                </label>
            </div>

            <div className="d-flex justify-content-center flex-wrap mb-5">
                <div
                    className="border border-gray-300 border-dashed rounded py-1 px-1 me-7 mb-3"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <div className="fs-6 text-gray-800 fw-bolder" >
                        <label style={{
                            fontSize: "12px"
                        }}>
                            {props.dueDate}
                        </label>
                    </div>
                    <div className="fw-bold text-gray-400">Due Date</div>
                </div>

                <div
                    className="border border-gray-300 border-dashed rounded  py-1 px-1 mb-3"
                    style={{
                        textAlign: "center"
                    }}
                >
                    <div className="fs-6 text-gray-800 fw-bolder">
                        <label style={{
                            fontSize: "12px"
                        }}>

                            Cash Contract Equity
                        </label>
                    </div>
                    <div className="fw-bold text-gray-400">Budget</div>
                </div>

            </div>

            <div
                className="h-4px w-100 mb-5"
                data-bs-toggle="tooltip"
                title="This project 50% completed"
                style={{
                    backgroundColor: "#c5dcff"
                }}
            >

            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-around"

            }}>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                }}>
                    <label style={{ fontSize: "23px", fontWeight: "600" }}>
                        {props.following}
                    </label>
                    <label style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#b1b1b1"
                    }}>
                        Following
                    </label>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                }}>
                    <label style={{ fontSize: "23px", fontWeight: "600" }}>
                        {props.interest}
                    </label>
                    <label style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#b1b1b1"
                    }}>
                        Show of Interest
                    </label>
                </div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "35px"

            }}>
                <Button
                    // role="button"
                    // to="/view_opportunity"
                    className="btn btn-primary text-hover-white fw-bolder"
                    style={{
                        "display": "flex",
                        "justifyContent": "center",
                        "alignItems": "center",
                        "borderRadius": "6px"
                    }}
                    onClick={() => {
                        history("/view_opportunity", {
                            state: {
                                title: props.title,
                                summary: props.summary,
                                due_date: props.dueDate,
                                following: props.following,
                                interest: props.interest,
                                imgSource: props.src
                            },
                        })

                    }}
                >


                    View Opportunity
                </Button>
            </div>


        </div>
    )
}
export default GeneralOpportunityCard;