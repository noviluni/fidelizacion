import hug


@hug.get('/', output=hug.output_format.json)
def echo(cors: hug.directives.cors="*"):
    return {
      "title": "Signup",
      "subtitle": "What kind of user are you?",
      "footer": "Enjoy a 10% discount on you reservation just for signup",
      "userTypes": [{
        "name": "guest",
        "text": "A hotel guest",
        "form": {
          "title": "Hotel Guest",
          "inputs": [
            {
              "label": "Name",
              "placeholder": "Enter your name",
              "inputType": "text",
              "required": True,
              "key": "firstname"
            },
            {
              "label": "Last name",
              "placeholder": "Enter your last name",
              "inputType": "text",
              "required": True,
              "key": "last_name"
            },
            {
              "label": "Email",
              "placeholder": "Enter your email",
              "inputType": "email",
              "required": True,
              "key": "email"
            },
            {
              "label": "Phone",
              "placeholder": "Enter your phone",
              "inputType": "text",
              "required": False,
              "key": "phone"
            },
          ],
          "footer": "* required fields",
          "buttonText": "Send",
          "thanksPage": {
            "title": "Hotel Guest",
            "firstText": "",
            "secondText": "Advantatges",
            "advantages": [
              {
                "text": "Enjoy 10% discount on your reservation",
                "id": 0
              },
              {
                "text": "24hs / 365 days phone 900-000-000",
                "id": 1
              }
            ],
            "buttonText": "Continue"
          }
        }
      },
      {
        "name": "agency",
        "text": "A travel agency",
        "form": {
          "title": "Travel Agency",
          "inputs": [
            {
              "label": "Agency Name",
              "placeholder": "Enter your agency name",
              "inputType": "text",
              "required": True,
              "key": "name"
            },
            {
              "label": "Contact name",
              "placeholder": "Enter your contact name",
              "inputType": "text",
              "required": True,
              "key": "contact_name"
            },
            {
              "label": "Contact email",
              "placeholder": "Enter your contact email",
              "inputType": "email",
              "required": True,
              "key": "email"
            },
            {
              "label": "Agency id code",
              "placeholder": "Enter agency id code",
              "inputType": "text",
              "required": False,
              "key": "agency_id"
            },
          ],
          "footer": "* required fields",
          "buttonText": "Send",    
          "thanksPage": {
            "title": "Travel agency",
            "firstText": "Thank You!",
            "secondText": "shortly we will be in contact",
            "advantages": [],
            "buttonText": "Continue"
          }
        }
      },
      {
        "name": "company",
        "text": "A company",
        "form": {
          "title": "Company",
          "inputs": [
            {
              "label": "Company Name",
              "placeholder": "Enter your company name",
              "inputType": "text",
              "required": True,
              "key": "name"
            },
            {
              "label": "Contact email",
              "placeholder": "Enter your contact email",
              "inputType": "email",
              "required": True,
              "key": "contact_email"
            },
            {
              "label": "Phone",
              "placeholder": "Enter your company phone",
              "inputType": "text",
              "required": True,
              "key": "phone"
            },
            {
              "label": "Comments",
              "placeholder": "add your comments here",
              "inputType": "textarea",
              "required": False,
              "key": "comments"
            },
          ],
          "footer": "* required fields",
          "buttonText": "Send",
          "thanksPage": {
            "title": "Company",
            "firstText": "Thank You!",
            "secondText": "shortly we will be in contact",
            "advantages": [],
            "buttonText": "Continue"
          }
        }
      }]
    }
