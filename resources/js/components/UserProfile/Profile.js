import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Amit Mahato",
      usergroup: "Buyer",
      userimg:
        "https://scontent.fktm7-1.fna.fbcdn.net/v/t1.0-1/p160x160/27331799_1528657350582906_3326165636941885358_n.jpg?_nc_cat=105&_nc_ht=scontent.fktm7-1.fna&oh=64bc5ec600ea1b8302b406ba3fc15ec3&oe=5CBD1756"
    };
  }
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row profile">
            <div className="col-md-3">
              <div className="profile-sidebar">
                {/* <!-- SIDEBAR USERPIC --> */}
                <div className="profile-userpic">
                  <img
                    src={this.state.userimg}
                    className="img-responsive"
                    alt="User Profile Pic"
                  />
                </div>
                {/* <!-- END SIDEBAR USERPIC -->
                            <!-- SIDEBAR USER TITLE --> */}
                <div className="profile-usertitle">
                  <div className="profile-usertitle-name">
                    {this.state.username}
                  </div>
                  <div className="profile-usertitle-job">
                    {this.state.usergroup}
                  </div>
                </div>
                {/* <!-- END SIDEBAR USER TITLE -->
                            <!-- SIDEBAR BUTTONS --> */}
                <div className="profile-userbuttons">
                  <button type="button" className="btn btn-success btn-sm">
                    Follow
                  </button>
                  <button type="button" className="btn btn-danger btn-sm">
                    Message
                  </button>
                </div>
                {/* <!-- END SIDEBAR BUTTONS -->
                            <!-- SIDEBAR MENU --> */}
                <div className="profile-usermenu">
                  <ul className="nav">
                    <li className="active">
                      <Link to="/">
                        <i className="glyphicon glyphicon-home" /> Overview
                      </Link>
                    </li>
                    <li>
                      <Link to="/accountsetting">
                        <i className="glyphicon glyphicon-user" /> Account
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="/tasks">
                        <i className="glyphicon glyphicon-bookmark" />{" "}
                        Bookmarked Product
                      </Link>
                    </li>
                    <li>
                      <Link to="/help">
                        <i className="glyphicon glyphicon-star" /> Product
                        Reviewed
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- END MENU --> */}
              </div>
            </div>
            <div className="col-md-9">
              <div className="profile-content">
                <Route path="/" exact render={() => <div>Overview</div>} />
                <Route
                  path="/accountsetting"
                  render={() => <div>Account Setting</div>}
                />
                <Route path="/tasks" render={() => <div>Saved Product</div>} />
                <Route
                  path="/help"
                  render={() => <div>Product Reviewed</div>}
                />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

