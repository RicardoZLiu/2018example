import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

$(function(){
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'D97634'
    })
})

class Person {
    static info = { name:"zs", age: 20 }
}

console.log(Person.info)