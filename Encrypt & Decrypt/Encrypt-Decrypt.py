
count = 0 
while True: 
    userName = input("\n\nUsername: ") 
    from getpass import getpass
    password =getpass()
    count += 1
    if count == 3:  
        print("Bye!");
        break     #The program stops when the user enters the wrong username or password three times
    else:
   # Change your password and Username
        if userName == 'ap' and password == '1234':

            decrypted = b"abcdefghijklmnopqrstuvwxyz!@#$%^&*()1234567890 "
      # your own encryption methode 
      # Importent : Do not write one charactor multiple times
            encrypted = b"qmlpoknjiuhbvgytfcxdreszaw3465217809(@)!#*^$%& "

            encrypt_table = bytes.maketrans(decrypted, encrypted)
            decrypt_table = bytes.maketrans(encrypted, decrypted)
		

            result = ''
            choice = ''
            message = ''

            while choice != '3':
                choice = input("---------------------------------------------------"
			       "\n Do you want to encrypt or decrypt the message?\n"
			       "  1. encrypt\n  2. decrypt\n  3. exit program.\n\nchoose: ")
            # encryption process
                if choice == '1':
                    message = input('\nEnter message for encryption: ')
                    result = message.translate(encrypt_table)
                    print("\n==> " + result + '\n')

            # decryption process
                elif choice == '2':
                    message = input('\nEnter message to decrypt: ')
                    result = message.translate(decrypt_table)
                    print("\n==> " + result + '\n')

                elif choice != '3':
                    print('\n\nIncorrect Choice! \n')
            break         
       


        