import React, {useState} from 'react'
import {render, h} from 'react-dom'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './app.css'

import PickerView from './picker-view'
import View1 from './view1'
import View2 from './view2'
import View3 from './view3'

const App = (props, store) => {
    const inputProps = {
        'confirm-type': 'search',
    }
    const mapProps = {
        longitude: 113.324520,
        latitude: 23.099994,
        scale: 14,
        controls: JSON.stringify([{
            id: 1,
            iconPath: 'https://i.loli.net/2019/07/27/5d3c143497e6d38917.jpg',
            position: {
                left: 0,
                top: 300 - 50,
                width: 50,
                height: 50,
            },
            clickable: true,
        }]),
        markers: JSON.stringify([{
            iconPath: 'https://i.loli.net/2019/07/27/5d3c141367f2784840.jpg',
            id: 0,
            latitude: 23.099994,
            longitude: 113.324520,
            width: 50,
            height: 50,
        }]),
        polyline: JSON.stringify([{
            points: [{
                longitude: 113.3245211,
                latitude: 23.10229,
            }, {
                longitude: 113.324520,
                latitude: 23.21229,
            }],
            color: '#FF0000DD',
            width: 2,
            dottedLine: true,
        }]),
        'show-location': true,
    }
    const [pickerRange1, setPickerRange1] = useState(['中国', '美国', '巴西', '日本'])
    const pickerRange2 = JSON.stringify([
        {name: '中国'},
        {name: '美国'},
        {name: '巴西'},
        {name: '日本'}
    ])
    const scrollViewProps = {
        className: 'scroll-view-y',
        'scroll-y': true,
        'scroll-with-animation': true,
        'refresher-enabled': true,
    }

    return (
        <div>
            <div>
                我是输入框：
                <input
                    {...inputProps}
                    onClick={e => console.log('click', e)}
                    onInput={e => console.log('input', e)}
                    onFocus={e => console.log('focus', e)}
                    onBlur={e => console.log('blur', e)}
                    onChange={e => console.log('change', e)}
                />
            </div>
            <div>
                我是 checkbox：
                <input
                    type="checkbox"
                    onChange={e => console.log('change', e)}
                />
            </div>
            <div>
                我是 radio：
                <input
                    type="radio"
                    name="radio"
                    value="1"
                    onChange={e => console.log('change', e)}
                />
                <input
                    type="radio"
                    name="radio"
                    value="2"
                    onChange={e => console.log('change', e)}
                />
            </div>
            <div>
                我是 map
                <wx-map {...mapProps}></wx-map>
            </div>
            <div>
                我是 picker：
                <wx-picker range={pickerRange1}>选择国家1</wx-picker>
                <wx-picker range={pickerRange2} range-key="name">选择国家2</wx-picker>
                <div>
                    <button onClick={() => setPickerRange1(['中国', '外国'])}>更新 picker1</button>
                </div>
            </div>
            <div>
                我是 scroll-view：
                <wx-scroll-view {...scrollViewProps}>
                <div>
                    <div class="block block1"></div>
                    <div class="block block2"></div>
                    <div class="block block3"></div>
                    <div class="block block4"></div>
                    <div class="block block5"></div>
                </div>
                </wx-scroll-view>
            </div>
            <div>
                我是 picker-view：
                <PickerView></PickerView>
            </div>
            <Router>
                <div>react-router</div>
                <ul>
                    <li><Link to="/view1">view1</Link></li>
                    <li><Link to="/view2">view2</Link></li>
                    <li><Link to="/view3">view3</Link></li>
                </ul>
                <Switch>
                    <Route path="/view1" component={View1}></Route>
                    <Route path="/view2" component={View2}></Route>
                    <Route path="/:view" component={View3}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
