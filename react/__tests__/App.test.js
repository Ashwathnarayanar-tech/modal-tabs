import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ModelTabs from "../ModelTabs";
import { render } from '@vtex/test-tools/react'



// Configuration
configure({ adapter: new Adapter() });



// AddressBanner Component
describe("ModelTabs", () => {
    // To find the text EMAIL US
    const modelData = [

        {
            "label": "POPULAR MODELS",
            "contentType": "car",
            "content": [
                { "url": "javascript:void(0)", "modelName": "Altima", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-370zcoupe.png" },
                { "url": "javascript:void(0)", "modelName": "Leaf", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-leaf.png" },
                { "url": "javascript:void(0)", "modelName": "Maxima", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-maxima.png" },
                { "url": "javascript:void(0)", "modelName": "Rogue", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-rogue.png" },
                { "url": "javascript:void(0)", "modelName": "Sentra", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-sentra.png" },
                { "url": "javascript:void(0)", "modelName": "Titan", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-titan.png" }
            ]
        },
        {
            "label": "CARS",
            "contentType": "car",
            "content": [
                { "url": "javascript:void(0)", "modelName": "Altima", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-370zcoupe.png" },
                { "url": "javascript:void(0)", "modelName": "Leaf", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-leaf.png" },
                { "url": "javascript:void(0)", "modelName": "Maxima", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-maxima.png" },
                { "url": "javascript:void(0)", "modelName": "Versa", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-rogue.png" },
                { "url": "javascript:void(0)", "modelName": "Sentra", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-sentra.png" },
                { "url": "javascript:void(0)", "modelName": "Versa Note", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-titan.png" }
            ]
        },
        {
            "label": "CLASSICS",
            "contentType": "car",
            "content": [
                { "url": "javascript:void(0)", "modelName": "200SX", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "240SX", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "240Z", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "260Z", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "280Z", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "280ZX", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "300ZX", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "310", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "310GX", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "350Z", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "410", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "411", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" }
            ]
        },
        {
            "label": "COMMERCIAL",
            "contentType": "car",
            "content": [
                { "url": "javascript:void(0)", "modelName": "Frontier", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-xterra.png" },
                { "url": "javascript:void(0)", "modelName": "NV1500", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-roguesport.png" },
                { "url": "javascript:void(0)", "modelName": "NV200", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-nv.png" },
                { "url": "javascript:void(0)", "modelName": "NV200 Taxi", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-nv-taxi.png" },
                { "url": "javascript:void(0)", "modelName": "NV2500", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "NV3500", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "Titan", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-titan.png" }
            ]
        },
        {
            "label": "CROSSOVERS & SUVS",
            "contentType": "car",
            "content": [
                { "url": "javascript:void(0)", "modelName": "Armada", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-xterra.png" },
                { "url": "javascript:void(0)", "modelName": "Juke", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-roguesport.png" },
                { "url": "javascript:void(0)", "modelName": "Kicks", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-nv.png" },
                { "url": "javascript:void(0)", "modelName": "Murano", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-nv-taxi.png" },
                { "url": "javascript:void(0)", "modelName": "Path Finder", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "Quest", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-titan.png" },
                { "url": "javascript:void(0)", "modelName": "Rogue", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-roguesport.png" },
                { "url": "javascript:void(0)", "modelName": "Rogue Sport", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-rogue.png" },
                { "url": "javascript:void(0)", "modelName": "Xterra", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-titan.png" }
            ]
        },
        {
            "label": "ELECTRIC",
            "contentType": "date",
            "content": [
                { "url": "javascript:void(0)", "modelName": "2021", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "2020", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "2019", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "2018", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "2017", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "2016", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" }
            ]
        },
        {
            "label": "SPORTS CARS",
            "contentType": "car",
            "content": [
                { "url": "javascript:void(0)", "modelName": "370Z", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
                { "url": "javascript:void(0)", "modelName": "GT-R", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-titan.png" }
            ]
        },
        {
            "label": "TRUCKS",
            "contentType": "car",
            "content": [
                { "url": "javascript:void(0)", "modelName": "Frontier", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-frontier.png" },
                { "url": "javascript:void(0)", "modelName": "Titan", "img": ".https://echidna.vteximg.com.br/arquivos/jellybean-titan.png" }
            ]
        }
    ]

    const modelData2 = [

        {
            "label": "POPULAR MODELS",
            "contentType": "car",
            "content": []
        }
    ]

    it("should render ModelTabs", () => {
        const wrapper = shallow(< ModelTabs modelData={modelData} />);
        const text = wrapper.find("div Tabs div").exists();
        expect(text).toBe(true);
    });

    it("should render empty container when model data is empty", () => {
        const wrapper = shallow(< ModelTabs modelData={[]} />);
        const text = wrapper.find("div Tabs div").exists();
        expect(text).toBe(false);
    });

    it("should render ModelTabs with content", () => {
        const wrapper = shallow(< ModelTabs modelData={modelData} />);
        const text = wrapper.find("div Tabs div ul li").exists();
        expect(text).toBe(true);
    });

    it("should render ModelTabs without content", () => {
        const wrapper = shallow(< ModelTabs modelData={modelData2} />);
        const text = wrapper.find("div Tabs div ul li").exists();
        expect(text).toBe(false);
    });

    it("should render ModelTabs with content and image", () => {
        const wrapper = shallow(< ModelTabs modelData={modelData} />);
        const text = wrapper.find("div Tabs div ul li img").exists();
        expect(text).toBe(true);
    });


    it("should render truck tab", () => {
        const { getByText } = render(< ModelTabs modelData={modelData} />);
        expect(getByText(/TRUCKS/)).toBeDefined()

    });



});
