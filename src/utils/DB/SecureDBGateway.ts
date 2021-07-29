import EncryptedStorage from 'react-native-encrypted-storage';

export interface IUserInfo {
    id: number;
    email: string,
    token: string,
}

const SecureDBGateway = {
    save: async function(userInfo: IUserInfo){
        try {
            await EncryptedStorage.setItem(
                "user_session",
                JSON.stringify(userInfo)
            );
          } 
          catch (error) {
            return null 
          }
    }, 
    load: async function(){
        try{
            const session = await EncryptedStorage.getItem("user_session");
    
            if (session != undefined && session != null) {
                let userInfo: IUserInfo = JSON.parse(session)
                return userInfo; 
            }
            return false; 
        }
        catch(error){
            return null;
        }
    }, 
    delete: async function(){
        try{
            await EncryptedStorage.removeItem("user_session");
            return true;
        }
        catch(error){
            return null;
        }
    }, 
}

export default SecureDBGateway;