import { Post } from "../elements/Post";
import styles from "./MainPage.module.css";
 
export const MainPage =(props) =>{
    return<div className ={styles.content}>
         <Post/>
         
    </div>
}