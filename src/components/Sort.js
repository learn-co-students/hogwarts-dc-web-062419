// import React from 'react'
// // import hogs from '../porkers_data'



// class Sort extends React.Component{

//     constructor(){
//         super()
//         this.state = {
//             selected: ''
//         }
//     }

//     changeFilter = (e) => {
//         debugger
//         this.setState({
//             selected: e.target.value
//         })
//         debugger
//         switch(e.target.value){
//             case 'name':
//                 this.props.sortHogs(this.sortName())
//             break;
            
//             case 'weight':
//                 console.log('hi weights')
//             break;

//             case "": debugger; this.props.sortHogs
//             (this.props.allHogs)
//             break;
//             default: 
//                 this.props.sortHogs(this.props.allHogs)
//         }
//     }


//     sortName = () => {
//         let hogs = [...this.props.hogs]
//        return hogs.sort((hog1, hog2) => {
//            let name1 = hog1.name.toLowerCase()
//            let name2 = hog2.name.toLowerCase()
//            if(name1 < name2) {
//                return -1
//            }
//            if (name1 > name2) {
//                return 1
//            }
//             return 0 
//         })
//     }


//     render(){
//         return(
//             <div className='ui grid'>
//                 <div className='row centered'>
//                     <select className='ui selection dropdown' onChange={this.changeFilter}>
//                         <option value="">Sort: Off</option>
//                         <option value="name">Name</option>
//                         <option value="weight">Weight</option>
//                     </select>
//                 </div>
//             </div>
//         )
//     }
// }


// export default Sort