import React, { Component } from "react";

import cx from 'classnames'
import styles from "./FiltersArcadion.module.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ChevronIcon from "../../assets/main_page/chevron_down.svg";
// import { connect } from "react-redux";

class FilterAccordion extends Component {
    handleCheck = (e) => {
        // console.log(e.target.checked);

        const key = e.target.value.split(":")[0];
        const value = e.target.value.split(":")[1];
        this.props.setFilters(key, value, e.target.checked);
    };

    render() {
        return (
            <Accordion className="my-3">
                <Card className={cx(styles.card, "my-4")}>
                    <Card.Header

                        className={cx(styles.cardHeader, "col-sm-12 p-0")}

                    >
                        <span>YEAR</span>

                    </Card.Header>

                    <Card.Body className="px-0 pt-4 pb-0">
                        <ul className={cx(styles.ul, "row d-flex m-0")}>
                            <li className="col-12">
                                <label>
                                    <input
                                        value="year:1"
                                        onChange={(e) =>
                                            this.handleCheck(e)
                                        }
                                        type="checkbox"
                                    />
                                    <p>First</p>
                                </label>
                            </li>
                            <li className="col-12">
                                <label>
                                    <input
                                        value="year:2"
                                        onChange={(e) =>
                                            this.handleCheck(e)
                                        }
                                        type="checkbox"
                                    />
                                    <p>Second</p>
                                </label>
                            </li>
                            <li className="col-12">
                                <label>
                                    <input
                                        value="year:3"
                                        onChange={(e) =>
                                            this.handleCheck(e)
                                        }
                                        type="checkbox"
                                    />
                                    <p>Third</p>
                                </label>
                            </li>
                            <li className="col-12">
                                <label>
                                    <input
                                        value="year:4"
                                        onChange={(e) =>
                                            this.handleCheck(e)
                                        }
                                        type="checkbox"
                                    />
                                    <p>Fourth</p>
                                </label>
                            </li>
                        </ul>
                    </Card.Body>

                </Card>

                <Card className={cx(styles.card, "my-3 my-md-4")}>
                    <Card.Header

                        className={cx(styles.cardHeader, "col-sm-12 p-0")}

                    >
                        <span>CONDITION</span>

                    </Card.Header>

                    <Card.Body className="px-0 pt-4 pb-0">
                        <ul className={cx(styles.ul, "row d-flex m-0")}>
                            <li className="col-12">
                                <label>
                                    <input
                                        value="hand:1"
                                        onChange={(e) =>
                                            this.handleCheck(e)
                                        }
                                        type="checkbox"
                                    />
                                    <p>New</p>
                                </label>
                            </li>
                            <li className="col-12">
                                <label>
                                    <input
                                        value="hand:2"
                                        onChange={(e) =>
                                            this.handleCheck(e)
                                        }
                                        type="checkbox"
                                    />
                                    <p>Used</p>
                                </label>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>


            </Accordion>

        );
    }
}

export default FilterAccordion;