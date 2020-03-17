<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
        <label>Item Name</label>
        <input type="text" v-model.lazy="item.name" required/>
        
        <label> Grocery Type </label>
        <select v-model="selectedtype">
          <option disabled value="">Please select one</option>
          <option>Food</option>
          <option>Household Items</option>
        </select>

        <label>Specific Category of Item</label>
        <input type="text" v-model.lazy="item.category"/>

        <form>
        <label class = 'radioi-inline' for="one">Diminishable<input type="radio" id="one" value="Diminishable" v-model.lazy="item.diminish"/></label>
        <label class = 'radioi-inline' for="two">Non-dimishable<input type="radio" id="two" value="Non-diminishable" v-model.lazy="item.diminish"/></label>
        
        </form>
        <p>
        <button v-on:click.prevent="addItem">Add Item</button></p>

        
    </form>
  </div>
</template>

<script>

import database from '../firebase.js' //have database variable
export default {

  data(){
    return{
        msg:"Add Item",
        item:{
          name:'',
          category:'',
          diminish:'',
          selectedtype:''
        },
        
        
        }
  },
  methods:{
    addItem:  function () {
          //Save item to database
          database.collection('items').doc().set(this.item);
          this.item.name="";
          this.item.category="";
          this.item.picked=""; //clear text fields again
          alert("I am in the DB .... :-) Item saved successfully")
          
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}

select{
  display: inline-block;
    padding: 8px;
    width:50%;
}
</style>