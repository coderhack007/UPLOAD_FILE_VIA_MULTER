# UPLOAD_FILE_VIA_MULTER

CMDS:- 

yarn install
yarn add multer
yarn add express



C-URL:-

curl --location --request POST 'http://localhost:6000/single' \
--form 'file=@"/Users/siddheshsalunkhe/Downloads/addresses.csv"'


body>form-data>key:file>value:actual file path
