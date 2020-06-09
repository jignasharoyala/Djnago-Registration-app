import mysql.connector


mydb = mysql.connector.connect(
  
  user="root",
  passwd="admin",
  host='127.0.0.1', port=3306,
  database="practical"
)
mycursor = mydb.cursor()

# mycursor.execute("CREATE DATABASE practical")
# mycursor.execute("CREATE TABLE employee (emp_id INT AUTO_INCREMENT PRIMARY KEY, emp_first_name VARCHAR(255), emp_last_name VARCHAR(255), emp_image LONGBLOB, emp_email VARCHAR(2550), role_id INT)")
# mycursor.execute("SHOW TABLES")


def dbChecker():
    try:
        mycursor = mydb.cursor()

        mycursor.execute("SHOW DATABASES")  

        for x in mycursor:
            print(x)
            if x == "practical":
                print("DATABASES EXIST")
            else:
                mycursor.execute("CREATE DATABASE practical")
                print("DATABASE CREATE Sucessfully")
        
    except Exception as e:
        print("Try Again Something Want to Wrong")
    


def tableCreater():
    try:
        mycursor.execute("CREATE TABLE employee (emp_id INT AUTO_INCREMENT PRIMARY KEY, emp_first_name VARCHAR(255), emp_last_name VARCHAR(255), emp_image LONGBLOB, emp_email VARCHAR(2550), role_id INT)")
        mycursor.execute("SHOW TABLES")
        pass
    except Exception as e:
        pass


def dataDisplay():
    try:
        mycursor.execute("SELECT * FROM employee")

        myresult = mycursor.fetchall()

        for x in myresult:
          print(x)
        
    except Exception as e:
        print("Try Again Something Want to Wrong")


def dateInsetion():
    try:
        print("Enter employee name : ")
        emp_first_name = input()
        print("Enter employee Last name : ")
        emp_last_name = input()
        print("Enter employee Email Id : ")
        emp_email = input()
        print("Enter Role Id : ")
        role_id = input()

        sql = "INSERT INTO employee (emp_first_name, emp_last_name, emp_image, emp_email, role_id) VALUES (%s, %s, %s, %s, %s)"
        val = (emp_first_name, emp_last_name, "", emp_email, role_id)
        mycursor.execute(sql, val)

        mydb.commit()
        dataDisplay()
    except Exception as e:
        print("Try Again Something Want to Wrong")
        

def dataDeletion():
    try:
        print("Enter employee Id for deletion: ")
        emp_id = input()
        sql = "DELETE FROM employee WHERE emp_id = %s"    
        delrole_id = (int(emp_id), )
        mycursor.execute(sql, delrole_id)

        mydb.commit()

        print(mycursor.rowcount, "record(s) deleted")
        dataDisplay()
    except Exception as e:
        print("Try Again Something Want to Wrong")


def dateUpdation():
    try:
        print("Enter employee ID that you want to UPDATE")
        emp_id = input()

        print("Enter employee name : ")
        emp_first_name = input()
        print("Enter employee Last name : ")
        emp_last_name = input()
        print("Enter employee Email Id : ")
        emp_email = input()
        print("Enter Role Id : ")
        role_id = input()

        mycursor.execute ("""
           UPDATE employee
           SET emp_first_name=%s, emp_last_name=%s, emp_email=%s, role_id=%s
           WHERE emp_id=%s""", (emp_first_name, emp_last_name, emp_email, role_id, int(emp_id)))
        
       
        mydb.commit()

        print(mycursor.rowcount, "record(s) affected")
        dataDisplay()
    except Exception as e:
        print("Try Again Something Want to Wrong")      



def dropTable():
    sql = "DROP TABLE employee"
    mycursor.execute(sql)



print("Enter your Choice : ")
print("1 Data Insertion")
print("2 Data Updation")
print("3 Data Deletion")
print("4 Data Display")
print("5 Exit")
ch = input()
    
if int(ch) == 1:
    dateInsetion()
elif int(ch) == 2:
    dateUpdation()
elif int(ch) == 3:
    dataDeletion()
elif int(ch) == 4:
    dataDisplay()
elif int(ch) == 5 :
    exit()

