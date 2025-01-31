import React from "react";
import { Route, Switch } from "react-router-dom";
import InstancePage from "@app/Instance/InstancePage/InstancePage";
import InstancesListPage from "@app/Instance/InstancesListPage/InstancesListPage";
import CreateProcessorPage from "@app/Processor/CreateProcessorPage/CreateProcessorPage";
import ProcessorDetailPage from "@app/Processor/ProcessorDetailPage/ProcessorDetailPage";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <InstancesListPage />
      </Route>
      <Route path={`/instance/:instanceId/processor/:processorId`}>
        <ProcessorDetailPage />
      </Route>
      <Route path={`/instance/:instanceId/create-processor`}>
        <CreateProcessorPage />
      </Route>
      <Route path={`/instance/:instanceId`}>
        <InstancePage />
      </Route>
      <Route path="*">
        <>
          <p>no match</p>
        </>
      </Route>
    </Switch>
  );
};

export default Routes;
