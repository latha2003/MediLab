import React, { Component } from 'react'
import { testsData } from '../../../data/Tests-list'
import { employeeList } from '../../../data/Employee-list'


let data= testsData
let data1=employeeList

export class TestsData extends Component {

  static getTestsData2(){
    return [data.id,data.title,data.price,'view']
  }
  static getTestsData(){
    return data
  }

static async addText(testdata){
  data.push(testdata)
  return data
}

static async addemp(empdata){
  data1.push(empdata)
  return data1
}


static async deleteTestData(id){
debugger
  for(let i=0; i<data.length;i++){
    if(data[i].id==id){
      data.splice(i,1)
    }
}
return data
}

static async deleteEmpData(id){
  debugger
    for(let i=0; i<data1.length;i++){
      if(data1[i].id==id){
        data1.splice(i,1)
      }
  }
  return data1
  }
}

export default TestsData
