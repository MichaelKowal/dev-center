/*! For license information please see 351d88f4.4313b683.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26,49,89],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(9),o=(n(0),n(252)),i={},s={id:"web/snippets/prereqs-custom-code",title:"prereqs-custom-code",description:"-   Download and setup the [Geocortex Web SDK](../sdk-overview.mdx).",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx"},c=[],l={rightToc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Download and setup the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(o.b)("li",{parentName:"ul"},"Check out the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"}),"deployment instructions")," to learn more about deploying custom code to a Geocortex Web App.")))}m.isMDXComponent=!0},136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(9),o=(n(0),n(252)),i={},s={id:"web/snippets/framework-components",title:"framework-components",description:"\x3c!-- TODO-API link once available --\x3e",source:"@site/docs/web/snippets/framework-components.mdx",permalink:"/docs/web/snippets/framework-components",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/framework-components.mdx"},c=[],l={rightToc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This example uses Geocortex Framework UI components"))))}m.isMDXComponent=!0},182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return h}));var a=n(1),r=n(9),o=(n(0),n(252)),i=n(261),s=n(134),c=n(136),l=n(264),m=n(263),p={title:"Custom Service",description:"Geocortex Web - Implement a custom Service"},d={id:"web/usecases-implement-service",title:"Custom Service",description:"Geocortex Web - Implement a custom Service",source:"@site/docs/web/usecases-implement-service.mdx",permalink:"/docs/web/usecases-implement-service",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/usecases-implement-service.mdx",sidebar:"web",previous:{title:"Component Interactions",permalink:"/docs/web/usecases-component-interactions"},next:{title:"Using and Creating Events",permalink:"/docs/web/usecases-implement-event"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Example: Service that Implements Commands and Operations",id:"example-service-that-implements-commands-and-operations",children:[]},{value:"Example: Service that Manages Shared Dynamic Data",id:"example-service-that-manages-shared-dynamic-data",children:[{value:"Create a Service Skeleton",id:"create-a-service-skeleton",children:[]},{value:"Register the Custom Service",id:"register-the-custom-service",children:[]},{value:"Mock a Sporadically Updated Data Source",id:"mock-a-sporadically-updated-data-source",children:[]},{value:"Consume the Data in the Component Model",id:"consume-the-data-in-the-component-model",children:[]},{value:"Complete Example",id:"complete-example",children:[]}]}],b={rightToc:u};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When extending Geocortex Web, you may find yourself creating multiple ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/concepts-components-services#components"}),"components")," that have a shared concern, like a data source, or a REST endpoint call. Shared concerns like this present a good use case for creating a custom ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/concepts-components-services#services"}),"service"),".\nImplementing a custom service in Geocortex Web allows you to implement logic and shared resources that are available on startup to any component. Custom Services are also the recommended way of registering implementations for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-implement-command-operation"}),"custom commands and operations"),"."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(s.default,{mdxType:"PrereqsCustomCodeSnippet"}),Object(o.b)("h2",{id:"example-service-that-implements-commands-and-operations"},"Example: Service that Implements Commands and Operations"),Object(o.b)("p",null,"One common use case for implementing a custom service is to register an implementation for a custom command or operation. To learn how to do this, check out the example in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-implement-command-operation"}),"implement commands and operations"),"."),Object(o.b)("h2",{id:"example-service-that-manages-shared-dynamic-data"},"Example: Service that Manages Shared Dynamic Data"),Object(o.b)("p",null,"In this article, we will build a custom service that mocks a periodic fetch of data from a REST endpoint and stores that data for consumption by components. This service will populate a list of news items which will be consumed by the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-implement-component-with-ui#example-rss-feed-of-news-updates"}),"news feed component")," created in a previous article."),Object(o.b)("h3",{id:"create-a-service-skeleton"},"Create a Service Skeleton"),Object(o.b)("p",null,"Create a new folder structure with the following files. These files define a new service and export it from the ",Object(o.b)("inlineCode",{parentName:"p"},"CustomService")," folder."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/services/CustomDataService/CustomDataService.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/services/CustomDataService/index.ts"))),Object(o.b)(l.a,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Index",value:"index"}],mdxType:"Tabs"},Object(o.b)(m.a,{value:"service",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomDataService/CustomDataService.ts"',title:'"src/services/CustomDataService/CustomDataService.ts"'}),'import { ServiceBase } from "@geocortex/web/services";\n\nexport default class CustomDataService extends ServiceBase {}\n'))),Object(o.b)(m.a,{value:"index",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomDataService/index.ts"',title:'"src/services/CustomDataService/index.ts"'}),'export { default } from "./CustomDataService";\n')))),Object(o.b)("h3",{id:"register-the-custom-service"},"Register the Custom Service"),Object(o.b)("p",null,"Every service needs to be registered with the Web SDK in order to be discovered and initialized."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Services are initialized when they are ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-service-injection"}),"injected")," or when a command or operation that they register is called. To initialize a service on startup, you can pass the property ",Object(o.b)("inlineCode",{parentName:"p"},"loadOnStartup: true")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"registerService")," call."))),Object(o.b)("p",null,"Add a call to ",Object(o.b)("inlineCode",{parentName:"p"},"registerService")," in ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.ts"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'export default function(registry: LibraryRegistry) {\n    ...\n    registry.registerService({\n        id: "custom-service",\n        getServiceType: () => CustomService,\n    })\n    ...\n}\n')),Object(o.b)("h3",{id:"mock-a-sporadically-updated-data-source"},"Mock a Sporadically Updated Data Source"),Object(o.b)("p",null,"The purpose of this service will be to create a mock data source for the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-implement-component-with-ui#example-rss-feed-of-news-updates"}),"news feed component")," created in a previous article. We can mock a sporadically updated news feed data source, simulating what a real news feed, with data arriving from an RSS feed at unknown intervals, might behave like. This service exposed a single public property, ",Object(o.b)("inlineCode",{parentName:"p"},"newsItems")," which will act as a dynamic data source for the news feed component."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This example uses the ",Object(o.b)("inlineCode",{parentName:"p"},"_onInitialize")," method override to handle initialization logic, making sure to call the base method. Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/concepts-components-services#initialization-and-cleanup"}),"service initialization and cleanup"),"."))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomDataService/CustomDataService.ts"',title:'"src/services/CustomDataService/CustomDataService.ts"'}),'import { ServiceBase } from "@geocortex/web/services";\nimport Collection from "esri/core/Collection";\n\nconst newsItems = [\n    "New fire hydrant installed at Main and 5th.",\n    "Pipe burst at 4th and Broadview",\n    "Fire hydrant reported as needs maintenance by citizen.",\n    "Crack in road on the Johnson Street Bridge",\n    "Fire Hydrant vandalized in front of City Hall",\n];\n\nexport default class CustomDataService extends ServiceBase {\n    private _curIndex = 0;\n\n    // highlight-next-line\n    newsItems: Collection<string> = new Collection<string>();\n\n    private async _fetchRecentNews() {\n        // REST request for a news item would go here\n        return newsItems[this._curIndex++ % newsItems.length];\n    }\n\n    // in a real application, you would want to subscribe to a data source and not use polling.\n    private _startPollingForNewItems() {\n        const fetchNewsLoop = async () => {\n            const newNews = await this._fetchRecentNews();\n            let curTime = new Date().toTimeString().split("GMT")[0];\n            this.newsItems.unshift(`${curTime}- ${newNews}`);\n            setTimeout(fetchNewsLoop, Math.random() * 6000);\n        };\n\n        fetchNewsLoop();\n    }\n\n    // highlight-start\n    protected _onInitialize(): Promise<void> {\n        super._onInitialize();\n        this._startPollingForNewItems();\n        return;\n    }\n    // highlight-end\n}\n')),Object(o.b)("h3",{id:"consume-the-data-in-the-component-model"},"Consume the Data in the Component Model"),Object(o.b)("p",null,"Now that we have the news feed data being populated by a service, we need to consume that data in the news feed component.\nFollowing the best practices for implementing components, the news item data should be ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-implement-component-participate-app-config#component-models"}),"managed by the news feed model"),". Component Models can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-service-injection"}),"inject services")," as properties, and doing so allows us to directly access the dynamically updated ",Object(o.b)("inlineCode",{parentName:"p"},"newsItems")," property on the service."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"@inject")," must use the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," that the corresponding service registered in ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.ts"),"."))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/NewsFeedModel.ts"',title:'"src/services/NewsFeedModel.ts"'}),'import { ComponentModelBase, serializable } from "@geocortex/web/models";\nimport Collection from "esri/core/Collection";\nimport CustomDataService from "../../services/CustomDataService";\nimport { inject } from "@geocortex/web/services";\n\n@serializable\nexport default class NewsFeedModel extends ComponentModelBase {\n    // highlight-start\n    @inject("custom-data-service")\n    customDataService: CustomDataService | undefined;\n    // highlight-end\n\n    /**\n     * Array of items to display in the news feed\n     */\n    newsItems: Collection<string>;\n\n    protected _onInitialize(): Promise<void> {\n        super._onInitialize();\n        // highlight-next-line\n        this.newsItems = this.customDataService.newsItems;\n    }\n}\n')),Object(o.b)("h3",{id:"complete-example"},"Complete Example"),Object(o.b)("p",null,"Finally, we can bring it all together, and add the news item component and styling to the application. The news feed component watches for changes on the news feed model's ",Object(o.b)("inlineCode",{parentName:"p"},"newsItems")," property, which is in turn linked to the custom service's ",Object(o.b)("inlineCode",{parentName:"p"},"newsItems")," property. In this way, we've built a service which exposes shared data to components. Multiple news feed component could be created, and they would all rely on a single copy of the news items. For more information on how the news feed component was built, see the article on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-implement-component-with-ui"}),"custom components")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-implement-component-participate-app-config#example-model-for-the-news-feed-component"}),"linking app config to custom components"),"."),Object(o.b)(c.default,{mdxType:"FrameworkComponentsSnippet"}),Object(o.b)(l.a,{defaultValue:"component",values:[{label:"News Feed Component",value:"component"},{label:"Css",value:"css"},{label:"News Feed Model",value:"model"},{label:"Data Service",value:"service"},{label:"Registration",value:"index"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(o.b)(m.a,{value:"service",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomDataService/CustomDataService.ts"',title:'"src/services/CustomDataService/CustomDataService.ts"'}),'import { ServiceBase } from "@geocortex/web/services";\nimport Collection from "esri/core/Collection";\n\nconst newsItems = [\n    "New fire hydrant installed at Main and 5th.",\n    "Pipe burst at 4th and Broadview",\n    "Fire hydrant reported as needs maintenance by citizen.",\n    "Crack in road on the Johnson Street Bridge",\n    "Fire Hydrant vandalized in front of City Hall",\n];\n\nexport default class CustomDataService extends ServiceBase {\n    private _curIndex = 0;\n\n    newsItems: Collection<string> = new Collection<string>();\n\n    private async _fetchRecentNews() {\n        // REST request for a news item would go here\n        return newsItems[this._curIndex++ % newsItems.length];\n    }\n\n    private _startPollingForNewItems() {\n        const fetchNewsLoop = async () => {\n            const newNews = await this._fetchRecentNews();\n            const curTime = new Date().toTimeString().split("GMT")[0];\n            this.newsItems.unshift(`${curTime}- ${newNews}`);\n            setTimeout(fetchNewsLoop, Math.random() * 6000);\n        };\n\n        fetchNewsLoop();\n    }\n\n    protected _onInitialize(): Promise<void> {\n        super._onInitialize();\n        this._startPollingForNewItems();\n        return;\n    }\n}\n'))),Object(o.b)(m.a,{value:"component",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/component/NewsFeed/NewsFeed.tsx"',title:'"src/component/NewsFeed/NewsFeed.tsx"'}),'import React from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@geocortex/web/components";\nimport "./NewsFeed.css";\nimport { NewsFeedModel } from ".";\nimport { useWatchCollectionAndRerender } from "@geocortex/web/ui/hooks";\nimport List from "@geocortex/web/ui/list";\nimport ListItem from "@geocortex/web/ui/list-item";\nimport TitleBar from "@geocortex/web/ui/title-bar";\nimport "./NewsFeed.css";\nimport Typography from "@geocortex/web/ui/typography";\n\nexport default function NewsFeed(\n    props: LayoutElementProperties<NewsFeedModel>\n) {\n    const { model } = props;\n\n    useWatchCollectionAndRerender(model.newsItems);\n\n    return (\n        <LayoutElement {...props}>\n            <List className="news-item-list">\n                <TitleBar text="Recent News" />\n                {model.newsItems.toArray().map((news, idx) => (\n                    <ListItem key={idx}>\n                        <Typography>{news}</Typography>\n                    </ListItem>\n                ))}\n            </List>\n        </LayoutElement>\n    );\n}\n'))),Object(o.b)(m.a,{value:"model",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/component/NewsFeed/NewsFeedModel.ts"',title:'"src/component/NewsFeed/NewsFeedModel.ts"'}),'import { ComponentModelBase, serializable } from "@geocortex/web/models";\nimport Collection from "esri/core/Collection";\nimport CustomDataService from "../../services/CustomDataService";\nimport { inject } from "@geocortex/web/services";\n\n@serializable\nexport default class NewsFeedModel extends ComponentModelBase {\n    @inject("custom-data-service")\n    customDataService: CustomDataService;\n\n    /**\n     * Array of items to display in the news feed\n     */\n    newsItems: Collection<string> = new Collection<string>();\n\n    protected _onInitialize(): Promise<void> {\n        super._onInitialize();\n        this.newsItems = this.customDataService.newsItems;\n        return;\n    }\n}\n'))),Object(o.b)(m.a,{value:"css",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="src/components/NewsFeed/NewsFeed.css"',title:'"src/components/NewsFeed/NewsFeed.css"'}),".news-item-list {\n    max-height: 15em;\n    overflow: scroll;\n    padding: 1em;\n}\n"))),Object(o.b)(m.a,{value:"index",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import CustomDataService from "./services/CustomDataService";\nimport NewsFeed, { NewsFeedModel } from "./components/NewsFeed";\nimport { LibraryRegistry } from "@geocortex/web/config";\nimport { ComponentType } from "react";\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerService({\n        // highlight-next-line\n        id: "custom-data-service",\n        getServiceType: () => CustomDataService,\n    });\n    registry.registerComponent({\n        name: "news-feed",\n        namespace: "your.custom.namespace",\n        getComponentType: () => NewsFeed as ComponentType,\n        itemType: "news-feed-model",\n        title: "News Feed",\n    });\n    registry.registerModel({\n        getModelType: () => NewsFeedModel,\n        itemType: "news-feed-model",\n    });\n}\n'))),Object(o.b)(m.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(i.a)("img/web-implement-service-example.png")}))))}h.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(n),u=a,b=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(b,s({ref:t},l,{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},253:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},260:function(e,t,n){"use strict";var a=n(0),r=n(51);t.a=function(){return Object(a.useContext)(r.a)}},261:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(267);var a=n(260);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},262:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},263:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},264:function(e,t,n){"use strict";n(27),n(21),n(22);var a=n(0),r=n.n(a),o=n(262);var i=function(){return Object(a.useContext)(o.a)},s=n(253),c=n.n(s),l=n(132),m=n.n(l),p=37,d=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,s=e.values,l=e.groupId,u=i(),b=u.tabGroupChoices,h=u.setTabGroupChoices,v=Object(a.useState)(o),f=v[0],w=v[1];if(null!=l){var g=b[l];null!=g&&g!==f&&w(g)}var O=function(e){w(e),null!=l&&h(l,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===t,className:c()("tab-item",m.a.tabItem,{"tab-item--active":f===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e)},onFocus:function(){return O(t)},onClick:function(){return O(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},265:function(e,t,n){var a=n(75),r=n(26);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},266:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}},267:function(e,t,n){"use strict";var a=n(12),r=n(28),o=n(265),i="".startsWith;a(a.P+a.F*n(266)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return i?i.call(t,a,n):t.slice(n,n+a.length)===a}})}}]);