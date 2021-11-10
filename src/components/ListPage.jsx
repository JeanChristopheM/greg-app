import React from "react";

function ListPage({state}) {
    return ( 
    <React.Fragment>
        <h3>Database</h3>
        {
            state.data.length > 0 ?
            state.data.map(x=> {
                return (
                    <div className="dataSet card" key={x.id}>
                        <p>{x.task}</p>
                    </div>
                );
            }):
            <p>Loading Data...</p>
        }
    </React.Fragment>
    );
}

export default ListPage;