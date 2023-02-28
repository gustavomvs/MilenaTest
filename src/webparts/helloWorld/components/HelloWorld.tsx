import * as React from "react";
import { spfi, SPFx as spSPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/attachments";
import { IHelloWorldProps } from "./IHelloWorldProps";

const HelloWorld: React.FunctionComponent<IHelloWorldProps> = (props) => {
  const sp = spfi().using(spSPFx(props.context));

  console.log(sp);

  const meuInit = async (): Promise<void> => {
    const x = await sp.web.lists.getByTitle("Personagens").items();
    console.log(x);
  };

  React.useEffect(() => {
    meuInit();
  }, []);

  return <div>Hello world</div>;
};

export default HelloWorld;
