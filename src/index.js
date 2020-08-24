import Vue from 'vue';
import Axios from 'axios';
import appindex from './appindex';

Vue.config.devtools = true;

new Vue({
    el: '#app',
    data: {
    	Hello:"Hello world",
    	result:"",
    	database: {},
    	query:`/* Create a table called invoices */
CREATE TABLE invoices (
  id int PRIMARY KEY,
  ref varchar(255),
  due_date date,
  remains_to_be_paid int
);

/* Create few records in this table */
INSERT INTO invoices VALUES (1, 'INV001', '2020-10-26', 100);
INSERT INTO invoices VALUES (2, 'INV002', '2020-11-04', 199);
INSERT INTO invoices VALUES (3, 'INV003', '2020-04-04', 0);
INSERT INTO invoices VALUES (4, 'INV004', '2020-07-04', 300);
INSERT INTO invoices VALUES (5, 'INV005', '2019-08-04', 500);
INSERT INTO invoices VALUES (6, 'INV006', '1999-02-01', 10);
INSERT INTO invoices VALUES (7, 'INV007', '2020-07-04', 0);
INSERT INTO invoices VALUES (8, 'INV008', '2019-06-14', 700);

/* Display all the records from the table - YOUR SQL GOES HERE */
SELECT i.ref, i.due_date, i.remains_to_be_paid as remains
FROM invoices i;`
    },
    methods: {
    	sqltest() {
        var cors = "https://cors-anywhere.herokuapp.com/";
        var sqlUrl = "https://rextester.com/rundotnet/Run";
        var link = cors + sqlUrl;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", link, false); 
        var formData = new FormData(); 
	     formData.append("LanguageChoiceWrapper", 16);
	     formData.append("EditorChoiceWrapper", 1);
	     formData.append("LayoutChoiceWrapper", 1);
	     formData.append("Program", this.query);
	     formData.append("Privacy", "");
	     formData.append("PrivacyUsers", "");
	     formData.append("Title", "");
	     formData.append("SavedOutput", "");
	     formData.append("WholeError", "");
	     formData.append("WholeWarning", "");
	     formData.append("StatsToSave", "");
	     formData.append("CodeGuid", "");
	     formData.append("IsInEditMode", "False");
	     formData.append("IsLive", "False");  
        xhr.send(formData);
        var s = xhr.responseText;
        s = s.replace(/\\u003c/gi,"<").replace(/\\u003e/gi,">").replace(/\\u0026nbsp;/gi, ">").replace(/\\u0027/gi, ">").replace(/{"Warnings":null,"Errors":null,"Result":"/gi, "\n").replace(/","Stats":"/gi, ">>").replace(/","Files":null}/gi,".").replace(/\\r\\n/g, "\n").replace(/","Files":null,"NotLoggedIn":false}/gi, ".");
        this.result = s;  	
    	}
    },
    components: {
      appindex: appindex    
    },
    created() {
      this.sqltest();
      console.log(this.result) 
      Axios.get("https://ivanshavliuga.github.io/crios/api/database.json")
        .then(response => { this.database = response.data; console.log("status: ", this.database.status)})
          /*response => console.log("response", response.data)*/             
    }
});
