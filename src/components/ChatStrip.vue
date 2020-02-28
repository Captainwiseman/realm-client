<template>
  <div id="chat">
    <h3 class="chat-title">
      Live Chat
    </h3>
    <div id="chat-log">
      <ul>
        <li>
          <span class="user-name">Shrag</span
          ><span class="message">Niiiiii</span>
        </li>
        <li>
          <span class="user-name">Shrag</span
          ><span class="message">Niiiiii</span>
        </li>
        <li>
          <span class="user-name">Shrag</span
          ><span class="message">Niiiiii</span>
        </li>
      </ul>
    </div>
    <div class="chat-input-strip">
      <input type="text" id="chatInput" placeholder="Wallek, start chatting" />
    </div>
  </div>
</template>

<script>
// import _ from "lodash";
import { uuid } from "vue-uuid";

const LOCAL_STORAGE_ITEM = "chorusClientUser";

const stringChorusClientUser = localStorage.getItem(LOCAL_STORAGE_ITEM);
const objectChorusClientUser = JSON.parse(stringChorusClientUser);

if (!objectChorusClientUser) {
  const objectDefaultAnonUser = {
    _id: uuid.v4(),
    type: "anon",
    activityLog: [
      {
        date: new Date(),
        activity: "genesis"
      }
    ]
  };

  const stringDefaultAnonUser = JSON.stringify(objectDefaultAnonUser);
  localStorage.setItem(LOCAL_STORAGE_ITEM, stringDefaultAnonUser);
} else {
  const newActivity = {
    date: new Date(),
    activity: "started-app"
  };

  const newObjectChorusClientUser = Object.assign(objectChorusClientUser);
  newObjectChorusClientUser.activityLog.push(newActivity);

  const newStringChorusClientUser = JSON.stringify(newObjectChorusClientUser);
  localStorage.setItem(LOCAL_STORAGE_ITEM, newStringChorusClientUser);
}

// console.log("User: ", localStorage.getItem(LOCAL_STORAGE_ITEM));

export default {
  name: "chat"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=IM+Fell+Great+Primer+SC&display=swap")

#chat
  background-color: rgba(0, 0, 0, 0)


h3.chat-title
  font-family: "IM Fell Great Primer SC", "Lucida Sans Unicode", "Lucida Grande",'sans-serif'
  font-size: 26px
  letter-spacing: 1.6px
  word-spacing: 1.4px
  font-weight: 700
  text-decoration: none
  font-style: normal
  font-variant: normal
  text-transform: none

ul
  margin: 10px 0 0 0
  list-style-type: none
  padding: 0

li
  /* display: inline-block */
  margin: 0 10px

a
  color: #42b983


.chat-input-strip
  margin-top: 1em
  padding: 0.2em

  input[type="text"]
    direction: ltr
    box-sizing: border-box
    outline: none
    border: 1px solid lightgray
    border-radius: 3px
    padding: 10px 50em 10px 10px
    transition: all 0.1s ease-out
</style>
