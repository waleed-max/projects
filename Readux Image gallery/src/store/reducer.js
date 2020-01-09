const initialState = {
  age: 20,
  history: [],
  item:"",
  newImage:[],
  finalImage:[],
  images:[{
    id:1,
       image:"https://picsum.photos/id/870/200/300?grayscale&blur=2",
        name:"Find enchanted wand"
   },{
    id:2,
       image:"https://picsum.photos/id/860/200/300?grayscale&blur=2",
        name:"Nice weather"
   },{
    id:3,
       image:"https://picsum.photos/id/882/200/300?grayscale&blur=2",
        name:"claim the tree"
   },{
       id:4,
          image:"https://picsum.photos/id/875/200/300?grayscale&blur=2",
           name:"claim the tree"
      },{
       id:5,
          image:"https://picsum.photos/id/883/200/300?grayscale&blur=2",
           name:"claim the tree"
      }]

};

const reducer = (state = initialState, action) => {
  

  switch (action.type) {
    
      case "DEL_IMAGE":
      return {
        ...state,
        newImage: state.newImage.filter((item)=> item.id !== action.id )
      }
      break;
      case "ADD_IMAGE":
      return {
        ...state,
        
        newImage: state.images.filter((item)=> item.id === action.id ),
         
        finalImage: state.newImage.concat({id: state.newImage.id, image: state.newImage.image})
        
      }
      break;
  }
  return state;
};

export default reducer;
