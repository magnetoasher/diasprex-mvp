import {KTSVG,} from '../../../helpers'


type Props = {
    id: string
    title1: string,
    title2: string,
    confirm: string,
    classname:string
    ConfirmHandler: () => {}
}
export function ConfirmModal(props:Props) {
    return (
        <div className="modal fade" tabIndex={-1} id={props.id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title1}</h5>
                        <div
                            className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <KTSVG
                                path="/media/icons/duotune/arrows/arr061.svg"
                                className="svg-icon svg-icon-2x"
                            />
                        </div>
                    </div>
                    <div className="modal-header">
                        <p>{props.title2}</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-light"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                        <button type="button"
                            className={props.classname}
                            onClick={props.ConfirmHandler}
                            data-bs-dismiss="modal"
                        >
                            {props.confirm}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
          
