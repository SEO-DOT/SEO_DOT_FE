// declare module "*.svg" {
//     const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//     //const value: string;
//     export default value;
// }

declare module "*.svg" {
    import * as React from "react";
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
