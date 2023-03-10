import React, {useEffect, useState} from "react";
import Layout from "../layout";
import ActionTable from "../components/ActionTable";
import {Link, Redirect} from "react-router-dom";
import {httpGet} from "../util/api";

const LayoutActionTable = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    httpGet("connection", (data) => {
      setData(data);
      setLoading(false);
    }, (data) => {
      // TODO: Return error page in case of failure here
      setLoading(false);
    })
  }, []);

  if(isLoading) {
    return null
  }
  if(!data.host) {
    return (<Redirect to="/welcome"/>)
  }
  return (
    <Layout>
      <div className="container-fluid px-4 py-3">
        <div className="d-flex justify-content-between align-items-center py-2">
          <h3 className="fw500 f28 mb-1">Actions</h3>
          <Link to="/create-action">
            {/*<button className="ms-4 bg-purple-light border-0 px-3 py-2 rounded-3 color1 fw500 f20">*/}
            <button className="w-100 border-0 text-white f16 action_create px-4">
              Create
            </button>
          </Link>
        </div>

        {/* BOTTOM SECTION */}
        <div className="user_container_upper mt-3">
          <div className="row gy-4">
            <div className="col-12 rounded-3">
              <ActionTable/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LayoutActionTable;
