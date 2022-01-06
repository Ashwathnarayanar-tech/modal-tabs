# modal-tabs
This app can used as block wherever we need a tab design structure.

![image](https://user-images.githubusercontent.com/86000416/148363437-0908a67c-281b-470d-ba92-82a625565a2a.png)

## Steps to use this block inside store theme:
# step1
Add "echidna.modal-tab":"0.x" in your store theme dependancies.

# step2
Add "modal-tabs" block, in page where you want to display a tab design structure.

# step3
Declare the block with props as shown below:

"modal-tabs":{
    "props":{
       "modelData" :  [

        {
          "label": "POPULAR MODELS",
          "contentType": "car",
          "content": [
            { "url": "javascript:void(0)", "modelName": "Altima", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-370zcoupe.png"},
            { "url": "javascript:void(0)", "modelName": "Leaf", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-leaf.png"},
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
            { "url": "javascript:void(0)", "modelName": "Leaf", "img": "https://echidna.vteximg.com.br/arquivos/jellybean-leaf.png"},
            { "url": "javascript:void(0)", "modelName": "Maxima", "img":  "https://echidna.vteximg.com.br/arquivos/jellybean-maxima.png" },
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
            { "url": "javascript:void(0)", "modelName": "240SX", "img":  "https://echidna.vteximg.com.br/arquivos/jellybean-placeholder.png" },
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
            { "url": "javascript:void(0)", "modelName": "Armada", "img":"https://echidna.vteximg.com.br/arquivos/jellybean-xterra.png"},
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
    }
  }
  
  # Available props:
  Label                                   String                        here you can add the name of the Tab
  ContentType                             String                        here you can add the type of the Tab
  Content                                 String                        here you can add img/modelName/url inside array of objects.
  
  # css classes:
  .modelTabWrapper
  .modelTabWrapper .tabList
  .tabContent
  .tabListItem
  .tabListItem a
  .tabListItem a:hover
  .tabListActive
  .tabListActive::after
  .tabContentContainer
  .modelRange
  .modelList
  
  
  
