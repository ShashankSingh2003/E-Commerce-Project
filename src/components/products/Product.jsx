import React, { Fragment } from 'react'
import Header from '../pages/Header';
import Footer from '../pages/Footer';
function Product() {
  return (
    <Fragment>
        <Header/>
           <section id="product_display">
                <div id="product_details_wrapper" className="d-sm-block d-md-flex">
                    <div className="img_container">
                        <div className="w-100 pr-4 d-flex justify-content-end">
                            <i className="bi bi-heart" />
                        </div>
                        <div id="product_img">
                            {/* Image will append here  */}
                        </div>
                    </div>
                    <div id="product_details">
                        <h4 id="product_name">
                            {/* product name will append here  */}
                        </h4>
                        <p>MRP: <span id="str_price">
                            {/* Striked Through price append here */}
                        </span>
                            <span id="price">
                                {/* Normal price will append here */}
                            </span>
                        </p><p>inclusive of all taxes</p>
                        <p />
                        <select name="size" id="size_select">
                            <option value="select size">Select Size</option>
                            <option value="20ml">20ml</option>
                            <option value="30ml">30ml</option>
                        </select>
                        <div id="product-purchase" className="d-flex align-items-center">
                            <div className="add_to_bag pr-3">
                                <button id="add_to_cart">Add to Bag</button>
                            </div>
                            <div className="address_details pl-3">
                                <div className="pincode">
                                    <input type="number" placeholder="Enter Pincode" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex features">
                            <div className="gen_products">
                                <img src="data:image/png;base64,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" alt />
                                <p>100% Genuine products</p>
                            </div>
                            <div className="easy_return">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAM3UlEQVRo3t1a628U1xX/3cfM2uz6tesHYAMONsZAbUIgAfIoiRI1rZSkaZS0aWmqSu2Htuqfki/91EptQtWkapQ0UpCapm0i2hCqEhtMYgM2+LV+G+MHeG3va+49/XBnZme96xekX3osa9eeO3fO75xzzz3nd4cREf5fRH5VE60kk3Tr1gzGRscwMjqO+fkFpNMppNNpaK3BGIdt2ygpCaGqshI763egsXEPttfVoawswr4KHdj9euba9V66fq0XvX03sbCwsOX7I5EytLa2oHX/Phw5chic83sGds9gurq+pPOfXcDIyOh9GSMo2+vqcPLkI3j00ROQUm4Z1JbB9PXdpL98+BEmJiaLTWd+GEAAGFtDH/eZBAIRgcGM96SmphrPfuMZHD16ZEuANg3GcRz6y4d/x6efns9X3lWYMwCMgzEDJnitEIsGEUBEINIAGTBGl5w+Dx5ux0svfXvTa2pTYBKJJXrzzFuIx+O+/cGMspwzMMbBGQPnAuYSA+fcjA0CIuMNrbULhEBaQ7vfvf+DCOSCqo7F8MPXvo89u3dtCGhDMPGRMTpz5i0sLi7CNTg442Ccg3MOITg4F+DcfDIG95MVgKFgeGkNrQlaK5AmKO1AKe2CUtBaA8RAINi2xOkfvIr29q+tC2hdMJOTU/Tr3/wWS0vLYOBgnLkAhP8phATnDEJIE2Kcgfuey4WjFz7mcQQi+J7QWkEpDaWU+12533MeBAg//emPcejgAbZlMAsLC/T6679CMplylTSekFJCSukCEeBcgvOAN5gbhj4IN77gecpdKy4yT1mltAvEgVIKjuNAKwVHKZAHCoRf/vJnaNr7QFFAvNg/M5kMvfHmH/KAWFLCtm33NwTbDsGybEjpeceA5X4SMJ5h7hryvnuhx9115XlYSgHLshAKhXLz2zaklODCGIoBOHPmbdy5c5c2DeaDsx9icmLKeEOYh0jLgm3bsCzb/J3nHb52Gt5APODeXEJIWIFnmU8LQkowLrCyvIK3//hu0bkKwNy82U8XL3b4YeVNHAqFfCAbAQiHt+Hxx46jre0gYrEqCCG2AMx4ynuu8ZLtG49xhqGhIZw/f6HAO3m1meM49P77Z/MsZVmWG07uZIxt6IXS0hIcP37MHzRze5YGB4dxpasbyVRqA0CAt748I6x+nlIKf/vbxzh8uJ0qKsr9i3me6ei4hNnZOT+OjWUsWFYOyGZkdnYePVev+5arralmJ088zKKxqk3dX1pagidPPYbjx4+a9SSEiQo7F97pdAb/+Phc3n0+GMdx6Ny582CcuzdbkNKClLafqTbjFS87Dg4OF1yrjkU3BFJbU40fvfYqjh07wnY11JsocTOobYX89coFx+efd2JxMeEbzQfTc/U67ty9Y1KvZcGyLITD2/DUU0+grq5mSwtcaw3bthEfGaPBoWEaHBqm+MgYWba9vkdKSvDCC99CJBJmAJBOp3PlUiDspZSQwjLR1HnJv99fMx0dl8G5uUFaFoSQiMWiaNnXhNqaaly82ImJyekNgXieGRgYRm/vDWhNYAyQwqR2IQQcxylqnAePtCG4Brz6DTCrSAgBIoIlNbQ2+1JnxxU88/RTOTCJxBLF4yNuvpeQwsRlTU01uq50g3OOV155EW+eeQuLi8vrAiEiPPP0KTQ1PYB0Om0umJ0SoVAIc3Pz+ODshyi2V0ejlfme2lZqqupAaSSFgNYS0gU0Nz+HoaE47d3byCQAxEdGobV2067lZzIAeOKJk1COghCCtbbup46Org29s2fPrjwLB6W8vIw4F1BKFRji6tVerCwnyfPG+MSU8Yy7yQIAuVWI1hpCKAghMDQUx969jcYz8fhooFQxewgRYXJyGpaUzJImGg8e2I/NgPniix7s3tNAyZVkLkwYgx2ycfdOAtls1q+qgx6dnZ3H9PQMlHJM2Ejpe8XzEAN8Xb06bmx83IxPJJZoenrabISrNsOFhTvoHxikfc1NDABisShraNhJ4+OTRUGEw2HYlkRv301091xDJp02a4YDnEt38xOIVlUik81iZSXp37u9rhavvfa9Am++8877NDY2AQRaCiIC58xPCjMzt5FILJFMJBJYmF+A4AKC58CY4k/h2tU+7Gtu8idvazuIsbGJggVcWlKC7333RUQiESil/ErXWxpu1Psb8uzsLN5976w/tqQ0VNRAQgoQKFC8BioFV9/FuwkkEgnIxUQCqXQGQgoI4QGB3yxdu96HJ598nCorKxgA7Gvei9LSEFKpTN5DueCorKxwCQlrw1AsLy+noEGUo4qOU0oj10LkEoHXS0kp4TgOFhMJ8GQyBdIExrjpGDn3y3StFTKZNLq7e/zJLctizU1NBQ8lIqRS6Q1BeOJluvthh5hboXPGkUymwJ2sWWxrFY6kCZe7uvP+19Z2wHSCASD3In7n6Tdga44EkK+bV414Xa6TdUxUCMHy1spqmZmZwXB8xL+wc+cOtmPH9jyFtFbYqmit3JDWWBNKoIErJn4fxRm4ZYfAhZXrDQMbFGOmVQaAS5eu5E1y4EBLnmWV2pp3TBiTy9S4LM3aeIAicH1dBYNlh8DLImFYluWzLUEXen0L5xw9PdewvLzsz9i6fx+ku/+Y0kIHctfmPWNIDYKUxZOGkGLdEDR7D0dZJAxZVhZBJBLG4uJi4aBATGbSafT0XMOJE48AAMLhbaypqZFu3BjwFdsKFkNo5MJneDiOv370MTlOFqS1qd6lhYH+oVXkSKHYto2ysghkeXkZampiBWAABBgYASUEuq70+GAAoL39EPr6+rElFDk4CBZoZWURDAwMI5vNgEiBMQHbthCrjmFubh5uVVNUYrEoysvLIG3bZvX1O2l1/xHcab3NaXRkBOPjE9TQUM8AYM/uXSxaVUmzc3P3ACYnlZUV+MXPf7Km7d/781mKx9fmtLfX1cK2bcYBYOfO7UUHeUkgWOZcvpyfCFr2N/ub7FY4jWCjF42u34HW1FSve33HjjoAbnPWUL8T4XC46AODdBATAt09V5HNZv34aG87BBAhk8li9V6wkfjZUOt1x62X9jnnaG7emwMjhGDB+ms1II+CFZxjeTmJ3t4b/vWKinLWsKsB2WwG6fT6ZEVQUqkUHCdrwGzJBPmye3eD3274dfjhBw+tkwK57yHGGDo780Pt+PGHAACTUxt3op5MT89sGgTp3H62Wg63Hwpo6cr2ujrW2Li74AaPjfQIOiEE+vv7cfv2LGlNFI+PUiQcQTgcxoULFzcNpuvKF4FjjY1h6SKhWFYWQWtrS3Gq6eSJYygW97kq1SQCMIbe3j78+9//wZnfv435hXns2bMLoyNjeRTTWtLZ2UWjo+O+tTdTChnQwb+BkycfyRuTRwI2NNSzlpa91N8/tCYgbxO9dPlLnPr6o3j55RchuMDIyBgA4E/vvAdx+lWKRiv98PDn4Awzt27jz+9/YKoOV8mpqVuYnJyiurravHZaCIHl5RUMDA4FDqKMsWtqomhvO5hn+YJTgGQyRb974y1kMvn9iiaCVgqZTAaZTBpONotYdRT7mpvR23cTKysrcJQDJ+tAOQ70GrUWZ9znrW3bBmPcMP5aIRLe5mZFo7RlW8ikM1BaI2SHIC3Lb7dPn34Z2+vq1gcDANd7b9BHH31S8H/vqCGTSSOTyUBrDc44hDQkoXfdU64oGB7gkS0LcMH4cyrl1njMbb7MyUBJSakh/zjHiRPH8NijxwvWQ9FTgIMH9rOjRx9cM9Ty2H+e3/155Thj3Duuzf0wt1T3MqPPlHrzmyhiFGizV+nQ2Li7KBBgnZcanjz1GFtKLNGNmwMFYDgXPnOy+tdbBwwKOu/A1dBFPjcnJYTgIA2/w+VcmEXONAhuj+UCB0yl8sLz31xL5fXf0HjuuWeZ84FDg0PxPEA5dt5lTAAwzgF4dBCDw51Vp8fMJfEkpLTcEzcOYgSujafNmxzMp5VMCJvtoLamGi9953lYlrX1Y8CgfPLJv+jL7mu+1bXWIK2hArnfs55Hm+YYmtxRYK40Ml7hjIMAKGXWmVIKmrTLSeTOalpaml0g67/osOn3ADo6u+jChf9A62DfngPjeckD6x3CBklA7+yFB0LHu0d5Z5fIJ/wefvghPP30KbBNMPdbekNjfHyCzv3zM8zMzPpKBMMvqNy6Dy1GnFB+yVJRUY4nHj+Jgwf3b7p6vad3Zy5dukJdV7qRSCzlEdtfhViWhSNH2vDIw0cRCtn/m9dNVksymaKrV6+jt+8mbt++v+YMMJ5obW3B1w61wiMctyr3/YqWUoqmpqZx48YAJiencefuHWQyzob3CSFQVVWButpatLQ0ob5+B0Kh0H25+L7BrJa7dxdpbm4eS8srSK4kkUqnoZUC4xyhkI1tpSXYFt6GaFUVYrHoVxefAP4L7D8Yn2fA/l0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjRUMTU6NDQ6NDkrMDM6MDDIpLbKAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI0VDE1OjQ0OjQ5KzAzOjAwufkOdgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=" alt />
                                <p>Easy Return Policy</p>
                            </div>
                            <div className="sold_by">
                                <p>Sold By: Webreak Retailers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
    </Fragment>
  )
}

export default Product;