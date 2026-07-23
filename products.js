const allProducts = [
  {
    "Item Code": "0141DT",
    "Item Name": "510 TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ivF41_Hi2gqijhOIYZmkoY3ndzvt02we",
    "Product Image1": "./images/0141DT.png"
  },
  {
    "Item Code": "0142DT",
    "Item Name": "506 TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-ZUEJmsgjaTA7zeU5LnDycGEfk62CSzQ",
    "Product Image1": "./images/0142DT.png"
  },
  {
    "Item Code": "0143WL",
    "Item Name": "WATCH LOUPE",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FV9FQUZluRE_MFWH4YbnxK_tZsSw250Q",
    "Product Image1": "./images/0143WL.png"
  },
  {
    "Item Code": "0144SC",
    "Item Name": "SALVERT CLOTH",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=150ECPwFE58JotfZ5P1f1SFTIFNeQ0ns-",
    "Product Image1": "./images/0144SC.png"
  },
  {
    "Item Code": "0145ZB",
    "Item Name": "ZIP LOCK BAG",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BxTLr0anWLv-KZ661i1CVlrvWn_9AYpd",
    "Product Image1": "./images/0145ZB.png"
  },
  {
    "Item Code": "0146SB",
    "Item Name": "SEALING BAG",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1nSLMg6ci0MyBFZAXTZFtlYIJ5wBTpx0T",
    "Product Image1": "./images/0146SB.png"
  },
  {
    "Item Code": "0147TS",
    "Item Name": "TANITA SCALE 1230",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wiBgjTaQ--rhDb129Copm1xctfYjrYcW",
    "Product Image1": "./images/0147TS.png"
  },
  {
    "Item Code": "0148JP",
    "Item Name": "JEWELLERY POUCH ALL MIX",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZimA7EtVWb3cX4PqCYd8esyUGg1lQK_U",
    "Product Image1": "./images/0148JP.png"
  },
  {
    "Item Code": "0149BR",
    "Item Name": "BANGLE ROD BIG",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_9tEvUWttNGrJbGZV56hF5zKp6nNC4UY",
    "Product Image1": "./images/0149BR.png"
  },
  {
    "Item Code": "0150BR",
    "Item Name": "BANGLE ROD SMALL",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QgZlnqhIEXMgch8167w1zkBeVKovLC1y",
    "Product Image1": "./images/0150BR.png"
  },
  {
    "Item Code": "0151BR",
    "Item Name": "BANGLE POUCH ZIPPER",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fO6ZMsLqStlDw7fyikm33z4oZjb9PVS3",
    "Product Image1": "./images/0151BR.png"
  },
  {
    "Item Code": "0152RP",
    "Item Name": "RHODIUM PIN",
    "Category": "PLATING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SLpWPUhig6tRhUabP8mKA2ktSzsQwHtj",
    "Product Image1": "./images/0152RP.png"
  },
  {
    "Item Code": "0153DR",
    "Item Name": "DIALUX RED",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PJSt7OEZGjen4bZ0bQ2IzU_U_374NXo6",
    "Product Image1": "./images/0153DR.png"
  },
  {
    "Item Code": "0154DG",
    "Item Name": "DIALUX GREEN",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rNDB9yx4a2isfjKr8bEIp5u5fxSCvBCW",
    "Product Image1": "./images/0154DG.png"
  },
  {
    "Item Code": "0155DB",
    "Item Name": "DIALUX BLUE",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wINCaJvVoiEdENivy20etn6RU82KfFQY",
    "Product Image1": "./images/0155DB.png"
  },
  {
    "Item Code": "0156MG",
    "Item Name": "MAGNIFINE GLASS GERMANY",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sQrcY1wd-Cvi_aSfZtftH0YcxZ_Kcg9j",
    "Product Image1": "./images/0156MG.png"
  },
  {
    "Item Code": "0157MG",
    "Item Name": "MAGNIFINE GLASS NORMAL",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1huFc18MaUPTXIu55_SLUyRmd4mpuXy-2",
    "Product Image1": "./images/0157MG.png"
  },
  {
    "Item Code": "0158MG",
    "Item Name": "MAGNIFINE GLASS SC-11001",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dM-xFNs6voSMsyDSZtZ-wl7No-P6EPA0",
    "Product Image1": "./images/0158MG.png"
  },
  {
    "Item Code": "0159DT",
    "Item Name": "502 TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=18b7ltYWXI5pQ8OuqzsZ3QV9Ij_oNsfKF",
    "Product Image1": "./images/0159DT.png"
  },
  {
    "Item Code": "0160AS",
    "Item Name": "ABD SCALE 600 GRAM",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XSUcE7nZqdDupsT1UDPXlRPMflCi7AJS",
    "Product Image1": "./images/0160AS.png"
  },
  {
    "Item Code": "0161AS",
    "Item Name": "ABD SCALE DOUBLE DISPLAY 600 GRAM",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=18TYJGjy1lTKRxXlXID7Ey8B9c7b5vxSA",
    "Product Image1": "./images/0161AS.png"
  },
  {
    "Item Code": "0162LC",
    "Item Name": "LEATHER CLOTHS",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zOGIdGF9KpqaT3A-ge13fnrRoE3UUid2",
    "Product Image1": "./images/0162LC.png"
  },
  {
    "Item Code": "0163RC",
    "Item Name": "RING CLAMP",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1u__mMNAMPtk5YxnuMw5Fi-z1NDU3DfMa",
    "Product Image1": "./images/0163RC.png"
  },
  {
    "Item Code": "0164DT",
    "Item Name": "TORCH 2001",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ML3_bUlu0lfxfzxd-ZyWb3EGdIuxApPf",
    "Product Image1": "./images/0164DT.png"
  },
  {
    "Item Code": "0165DT",
    "Item Name": "TORCH 3000",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1T4dkJtJNKDbFkNoWSZ-CkUcr58nSZ1lz",
    "Product Image1": "./images/0165DT.png"
  },
  {
    "Item Code": "0166SP",
    "Item Name": "SILVER POLISHING GLOVES",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Rv48GfORSeGMURdMBP3RbVC0fd_Rq3wW",
    "Product Image1": "./images/0166SP.png"
  },
  {
    "Item Code": "0167UM",
    "Item Name": "ULTRASONIC MACHINE 2 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uac5eVzy3cCXUmYiovXr33aNRu7gFi72",
    "Product Image1": "./images/0167UM.png"
  },
  {
    "Item Code": "0168UM",
    "Item Name": "ULTRASONIC MACHINE 3 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=13Qy62b_5BSt-WEYP-xkUlhrRk-kMVaIn",
    "Product Image1": "./images/0168UM.png"
  },
  {
    "Item Code": "0169UM",
    "Item Name": "ULTRASONIC MACHINE 4 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1x2UeWbTdFtcTFFiicS8InRKHx7H380Bx",
    "Product Image1": "./images/0169UM.png"
  },
  {
    "Item Code": "0170TS",
    "Item Name": "TANITA SCALE 300 G",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gwYCggtbqqlO6y2c5Yjq3XGye_uddBTY",
    "Product Image1": "./images/0170TS.png"
  },
  {
    "Item Code": "0171TS",
    "Item Name": "TANITA SCALE 200 G",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zkGyrxzAg62oqBpZpUcBR3l8oGrBZNbR",
    "Product Image1": "./images/0171TS.png"
  },
  {
    "Item Code": "0172DG",
    "Item Name": "DIAMOND GAUGE MIX MODEL",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mlJIwZAyMBmadtHHIoDBf-zUGl_RQ6rG",
    "Product Image1": "./images/0172DG.png"
  },
  {
    "Item Code": "0173YO",
    "Item Name": "YELLOW OPTIVISOR",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eu88gPa1RP-1SvxhIRL21btZjnQHQhrF",
    "Product Image1": "./images/0173YO.png"
  },
  {
    "Item Code": "0174SC",
    "Item Name": "SWISS CUTTER",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LcnjSZK1CQUpSNL4ljQy81ekqbm14dxT",
    "Product Image1": "./images/0174SC.png"
  },
  {
    "Item Code": "0175PT",
    "Item Name": "PLASTIC TRAY SMALL",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xR2ODV482iArXIIJ9TXW_E2Yjbqg6v96",
    "Product Image1": "./images/0175PT.png"
  },
  {
    "Item Code": "0176PT",
    "Item Name": "PLASTIC TRAY JUMBO",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1EYI4f_SK7JXTK8cRUJ5PC-qc9ID9pNJY",
    "Product Image1": "./images/0176PT.png"
  },
  {
    "Item Code": "0177PM",
    "Item Name": "PFINGST MOTOR ITALY",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WO-s2Kt9gdP7tjUSEumZG9hlpHNDfYqc",
    "Product Image1": "./images/0177PM.png"
  },
  {
    "Item Code": "0178FM",
    "Item Name": "FORDOM MOTOR",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VOeJJHd76UtMI888_K-StQNU9Crp-H9L",
    "Product Image1": "./images/0178FM.png"
  },
  {
    "Item Code": "0179DT",
    "Item Name": "DIAMOND TWEEZER",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ALf7LVKFgwkbcXd-sE4aT8HKBtHq4ie6",
    "Product Image1": "./images/0179DT.png"
  },
  {
    "Item Code": "0180CP",
    "Item Name": "CUTTER JAPAN 5 INCH",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1q_B-hJub7l9IU4QwT8hcsGd__2ErwAT-",
    "Product Image1": "./images/0180CP.png"
  },
  {
    "Item Code": "0181CP",
    "Item Name": "CUTTER JAPAN 6 INCH",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hAtDL_mG7_6uZN8ccrSCYc7WlkFZii6P",
    "Product Image1": "./images/0181CP.png"
  },
  {
    "Item Code": "0182CP",
    "Item Name": "CUTTER JAPAN 7 INCH",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1h2hhDXxTdgU8hKRUhO9W3g5BKCEbZnnu",
    "Product Image1": "./images/0182CP.png"
  },
  {
    "Item Code": "0183CP",
    "Item Name": "CUTTER JAPAN 8 INCH",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1trdVJAYKljNMwU3Xh3hW_PgVub7vs-ku",
    "Product Image1": "./images/0183CP.png"
  },
  {
    "Item Code": "0184AS",
    "Item Name": "ABD SCALE 300 GRAM",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rv862tkIrqDEUQ6R6hSdnc7m3lDHdQHE",
    "Product Image1": "./images/0184AS.png"
  },
  {
    "Item Code": "0185MH",
    "Item Name": "MARATHAN HAND PIECES",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rnTofk5UBu6m9l5YHWlRo7wRUbitQG6n",
    "Product Image1": "./images/0185MH.png"
  },
  {
    "Item Code": "0186DS",
    "Item Name": "DIAMOND SCOPE SMALL",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1oF1_xSL-_s6ZrQgJdBcxrYTO59W3Rfaa",
    "Product Image1": "./images/0186DS.png"
  },
  {
    "Item Code": "0187DS",
    "Item Name": "DIAMOND SCOPE MEDIUM",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_H2WsuUnF8-UbwkwFivQfQYQlwwX4Za1",
    "Product Image1": "./images/0187DS.png"
  },
  {
    "Item Code": "0188DS",
    "Item Name": "DIAMOND SCOPE BIG",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Tf-kOP8648laD7aCzj6USSr1M5AAnx2B",
    "Product Image1": "./images/0188DS.png"
  },
  {
    "Item Code": "0189DL",
    "Item Name": "DIAMOND LOUPE 18 MM",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1r73m1F4rmALlWvYvfIXfMstmN-RgKQhW",
    "Product Image1": "./images/0189DL.png"
  },
  {
    "Item Code": "0190DL",
    "Item Name": "DIAMOND LOUPE 20.5 MM",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yZ8nv78ux6hdrzw1ym5O8CGCwLLxV81G",
    "Product Image1": "./images/0190DL.png"
  },
  {
    "Item Code": "0191IL",
    "Item Name": "INDIAN LOUPE",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1haDI2aoyuuDY0RRdyc2zW-q33_Tn5AGl",
    "Product Image1": "./images/0191IL.png"
  },
  {
    "Item Code": "0192DS",
    "Item Name": "DOUBLE SIDE LOUPE",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IAN6YrtjN3DgwN8gssdVj27P_SG7fI9r",
    "Product Image1": "./images/0192DS.png"
  },
  {
    "Item Code": "0193DS",
    "Item Name": "DIAMOND SELECTOR JAPAN",
    "Category": "DETECTORS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ekGhzrgUJgdnQtBZxfMl7hI2wx_Yc145",
    "Product Image1": "./images/0193DS.png"
  },
  {
    "Item Code": "0194DS",
    "Item Name": "DIAMOND SELECTOR CHINA",
    "Category": "DETECTORS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ugOxu3dwIftB6RMEAvsZMFAJxV7gRURa",
    "Product Image1": "./images/0194DS.png"
  },
  {
    "Item Code": "0195DS",
    "Item Name": "DIAMOND SELECTOR JAPAN SMALL",
    "Category": "DETECTORS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ulsT1B836Hqkf-Pu3Ir_txpR-Zb6sgX_",
    "Product Image1": "./images/0195DS.png"
  },
  {
    "Item Code": "0196NL",
    "Item Name": "NIKKON LOUPE",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1nOCdv2yu39QynTCZ__ncV6Ro8LQNow2c",
    "Product Image1": "./images/0196NL.png"
  },
  {
    "Item Code": "0197ZL",
    "Item Name": "ZESS LOUPE",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dtucEZ2MG2buxdwQ7rgTRLxuS65lQYtw",
    "Product Image1": "./images/0197ZL.png"
  },
  {
    "Item Code": "0198PK",
    "Item Name": "Pl-726 Keiba",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Dxk_M4AkRvdaduxwQqro2fy_wRpL5Jr_",
    "Product Image1": "./images/0198PK.png"
  },
  {
    "Item Code": "0199MK",
    "Item Name": "MNA-04 KEIBA",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LFoP96XaBNKXbjhaFjaMxNqXsRGwnA40",
    "Product Image1": "./images/0199MK.png"
  },
  {
    "Item Code": "0200CK",
    "Item Name": "C-C18 KEIBA",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=10VI8Qn_52BsyAA4Y4YXOKQYztaNjShST",
    "Product Image1": "./images/0200CK.png"
  },
  {
    "Item Code": "0201SB",
    "Item Name": "3939 SIEVERT BURNER",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QYTrjIdm4z4_x9X5KZAZyPI7V2uuVPzt",
    "Product Image1": "./images/0201SB.png"
  },
  {
    "Item Code": "0202SB",
    "Item Name": "3938 SIEVERT BURNER",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SQOMdBKh4sezj_-Y9TZFB55WaAuyNbbS",
    "Product Image1": "./images/0202SB.png"
  },
  {
    "Item Code": "0203SB",
    "Item Name": "3940 SIEVERT BURNER",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WLNJRvO4pJqj7r_IM78WrgFJXdm9Y68S",
    "Product Image1": "./images/0203SB.png"
  },
  {
    "Item Code": "0204SB",
    "Item Name": "3941 SIEVERT BURNER",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UYYFhNly3S8eC90j3n3mp8p2uCYjy_sA",
    "Product Image1": "./images/0204SB.png"
  },
  {
    "Item Code": "0205LP",
    "Item Name": "7490 LINDSTONE PLIER",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=19kZRCAkddOBTuBNntvEkFvqiaVe2LG0T",
    "Product Image1": "./images/0205LP.png"
  },
  {
    "Item Code": "0206LP",
    "Item Name": "7890 LINDSTONE PLIER",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1S-1us6iqj2T9Ctqtear7TEg_CB4RiIdA",
    "Product Image1": "./images/0206LP.png"
  },
  {
    "Item Code": "0207LC",
    "Item Name": "8140 LINDSTONE CUTTER",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17QQYlaX0spTbbOG1IUjfEYIZVi-C-FGH",
    "Product Image1": "./images/0207LC.png"
  },
  {
    "Item Code": "0208LC",
    "Item Name": "8142 LINDSTONE CUTTER",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Te1GDIpWnW_dkr5eZ789Kn8sZStrNUSP",
    "Product Image1": "./images/0208LC.png"
  },
  {
    "Item Code": "0209ES",
    "Item Name": "NV-3000 ENVY SCALE",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xTGzGDz-gEZm43MRO8mHZGwmUVGW0hqX",
    "Product Image1": "./images/0209ES.png"
  },
  {
    "Item Code": "0210CB",
    "Item Name": "CEIA BODY SCANNER-PD240",
    "Category": "DETECTORS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sHp88QzWoV4erZX4EMRqKVNUfGUl-eXV",
    "Product Image1": "./images/0210CB.png"
  },
  {
    "Item Code": "0211CB",
    "Item Name": "CEIA BODY SCANNER PD240CB",
    "Category": "DETECTORS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1x495uMtfGliyMSVyfbPTqthu0yCVL-18",
    "Product Image1": "./images/0211CB.png"
  },
  {
    "Item Code": "0212GT",
    "Item Name": "GT-6000 TORCH JAPAN",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RXWIfYdhaCpCPBBauted5bVlFF5eNeRs",
    "Product Image1": "./images/0212GT.png"
  },
  {
    "Item Code": "0213UT",
    "Item Name": "USA 2 TUBE GRAY LAMPS",
    "Category": "TABEL LAMPS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1m6iEsooyXz1VirczII3KcIgBaKjRAvh2",
    "Product Image1": "./images/0213UT.png"
  },
  {
    "Item Code": "0214UT",
    "Item Name": "USA 3 TUBE BLACK",
    "Category": "TABEL LAMPS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wastnfI1FGCwOUmG1XwNGE3KySokRx4Z",
    "Product Image1": "./images/0214UT.png"
  },
  {
    "Item Code": "0215SP",
    "Item Name": "SUPER PIKE SWISS SAW BLADE 2/0",
    "Category": "SAW BLADES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1n9-SYI7jeq260jQeOY6zCwL-Mbrv3kCi",
    "Product Image1": "./images/0215SP.png"
  },
  {
    "Item Code": "0216SP",
    "Item Name": "SUPER PIKE SWISS SAW BLADE 3/0",
    "Category": "SAW BLADES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VDlVmTPL0AyS-x-11ztObcz0Y_QgRbwl",
    "Product Image1": "./images/0216SP.png"
  },
  {
    "Item Code": "0217SP",
    "Item Name": "SUPER PIKE SWISS SAW BLADE 4/0",
    "Category": "SAW BLADES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wj796xp70xggLXF4PDaqEUi1Jnb_yNtZ",
    "Product Image1": "./images/0217SP.png"
  },
  {
    "Item Code": "0218SP",
    "Item Name": "SUPER PIKE SWISS SAW BLADE 5/0",
    "Category": "SAW BLADES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BfD3jUbS_rF3KRebA6l7FnGPkqaGaKoj",
    "Product Image1": "./images/0218SP.png"
  },
  {
    "Item Code": "0219PA",
    "Item Name": "PDMT-A DIAMOND MATE PRESIDIUM",
    "Category": "DETECTORS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15LKjRY5vwuxUfDuYFnl2Eem4i-hLvK5h",
    "Product Image1": "./images/0219PA.png"
  },
  {
    "Item Code": "0220DO",
    "Item Name": "DA5 OPTIVISOR",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jqy-mUfFOXaFPTzTuBu1R1WRQu25tPmR",
    "Product Image1": "./images/0220DO.png"
  },
  {
    "Item Code": "0221DO",
    "Item Name": "DA7 OPTIVISOR",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=14fkT17tmY_NiGdDnNoZD_EO-govSlF7A",
    "Product Image1": "./images/0221DO.png"
  },
  {
    "Item Code": "0222MK",
    "Item Name": "MN-B05 KEIBA",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1amEs3hnAGQ8EASObTcKBvnaxW3bcy_r2",
    "Product Image1": "./images/0222MK.png"
  },
  {
    "Item Code": "0223PK",
    "Item Name": "PI-714 KEIBA",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mmtjahcPRLjkNO1xDeMxMXu64p0M37bl",
    "Product Image1": "./images/0223PK.png"
  },
  {
    "Item Code": "0224PK",
    "Item Name": "PI-715 KEIBA",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13WJ4GfxdKbxbQ4C8oZC2xSWyZZw4g60Y",
    "Product Image1": "./images/0224PK.png"
  },
  {
    "Item Code": "0225PK",
    "Item Name": "PI-726 A KEIBA",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12cUh_UghEFa_JZ1VqYsY6SDEYNpRkxyn",
    "Product Image1": "./images/0225PK.png"
  },
  {
    "Item Code": "0226PK",
    "Item Name": "PI-717 KEIBA",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zLjP0HFyr5oOdMYzt8R0--LVFS7Sm7UA",
    "Product Image1": "./images/0226PK.png"
  },
  {
    "Item Code": "0227GC",
    "Item Name": "1045 GOLD CLEANER",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1nFRVOOHI7pZiDBQqpT80kPmz6kevaXCv",
    "Product Image1": "./images/0227GC.png"
  },
  {
    "Item Code": "0228SC",
    "Item Name": "1046 SLIVER CLEANER",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1g_C4B-IYApj6OTYfDX2U7Xts3DEXkudf",
    "Product Image1": "./images/0228SC.png"
  },
  {
    "Item Code": "0229SC",
    "Item Name": "739-1 SILVER CLOTH",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aCMG-ZTw1eyaFtIvfpBlJ1XGDfAeq7We",
    "Product Image1": "./images/0229SC.png"
  },
  {
    "Item Code": "0230NK",
    "Item Name": "NIKON LOUPE -10X LOUPE",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=19MihWoB5JMBaIcKy36-svnwYktxkBQtA",
    "Product Image1": "./images/0230NK.png"
  },
  {
    "Item Code": "0231CZ",
    "Item Name": "CARL ZEISS D40 LOUPE",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=15WNibj-j6MOLeVbkPtoss3kkt1Wu2slV",
    "Product Image1": "./images/0231CZ.png"
  },
  {
    "Item Code": "0232LN",
    "Item Name": "LA 2402 200MN-1 NEEDLE HAIF ROUND FILE",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1AgkeG9YtxPdJ0hVdl5E4PXS4cdJq-UME",
    "Product Image1": "./images/0232LN.png"
  },
  {
    "Item Code": "0233LN",
    "Item Name": "LA 2402 200MN-3 NEEDLE HAIF ROUND FILE",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1X8t17dhNv70JdG50H2ySWevOZC-yT2jE",
    "Product Image1": "./images/0233LN.png"
  },
  {
    "Item Code": "0234LN",
    "Item Name": "LA 2402 200MN-4 NEEDLE HAIF ROUND FILE",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FtV7K9DaA_KjhDH9dj17vO8pn1BinVgd",
    "Product Image1": "./images/0234LN.png"
  },
  {
    "Item Code": "0235LC",
    "Item Name": "8160 LINDSTROM CUTTER",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1H6dRJ6JAPtgpBUZlwbikbtsa9ghR7uZJ",
    "Product Image1": "./images/0235LC.png"
  },
  {
    "Item Code": "0236LP",
    "Item Name": "7892 LINDSTROM PLIER",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Lx0c4Zh3EdbQv8D-5IeZNXgH3qkCLyk0",
    "Product Image1": "./images/0236LP.png"
  },
  {
    "Item Code": "0237PK",
    "Item Name": "PI-716 KEIBA",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1p4jnjgkKL-aGnkKGxftpdXjKR6kqynbe",
    "Product Image1": "./images/0237PK.png"
  },
  {
    "Item Code": "01CDKP",
    "Item Name": "COPPER DROPS 1 KG PACKAGE",
    "Category": "METALS & ALLOYS",
    "Product Image": "https://drive.google.com/uc?export=download&id=188a0h9PwWE56I52-fCkL3Gs1_cnBMMos",
    "Product Image1": "./images/01CDKP.png"
  },
  {
    "Item Code": "02BOKP",
    "Item Name": "BRASS OX FREE 1 KG PACKAGE",
    "Category": "METALS & ALLOYS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1X3NSwcKxjaOysK8aThuZtcvt2VehwdPM",
    "Product Image1": "./images/02BOKP.png"
  },
  {
    "Item Code": "025SAD",
    "Item Name": "STAR ALLOY DROPS 1 KG PACKAGE",
    "Category": "METALS & ALLOYS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aH9D-M-OKpOVnECWlZdxeOXsXgdz-kwU",
    "Product Image1": "./images/025SAD.png"
  },
  {
    "Item Code": "026SAD",
    "Item Name": "STAR ALLOY SQUARE 1 KG PACKAGE",
    "Category": "METALS & ALLOYS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XYmhYZUIn6YLxMa0lyp-FHuiBh--a_X7",
    "Product Image1": "./images/026SAD.png"
  },
  {
    "Item Code": "032ZD0",
    "Item Name": "ZINK DROPS",
    "Category": "METALS & ALLOYS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Kn2eE_3M2oNRV30Gs9w9ZgMo0nSSlxJS",
    "Product Image1": "./images/032ZD0.png"
  },
  {
    "Item Code": "035PAG",
    "Item Name": "POLISHING ANDY GOLD SHAMPOO 1 KGS DRUM",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vvzlDlG9-kvblIfwimtny4_X32cg0Nzc",
    "Product Image1": "./images/035PAG.png"
  },
  {
    "Item Code": "03LWIK",
    "Item Name": "LOGIMEC WAX INJECTOR 1.5 KG",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tq0cugbwgjf_7ZWm0RLq6CgLJCSfsF25",
    "Product Image1": "./images/03LWIK.png"
  },
  {
    "Item Code": "04LWIK",
    "Item Name": "LOGIMEC WAX INJECTOR 2.5 KG",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=15JvPi6vw0Esg_llEX15aBxp4kqh7dsZN",
    "Product Image1": "./images/04LWIK.png"
  },
  {
    "Item Code": "05LS00",
    "Item Name": "LOGIMEC STEAMER/2",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1al4LhKItdE5QWYa4ZUcdK4TLHbZW5wAM",
    "Product Image1": "./images/05LS00.png"
  },
  {
    "Item Code": "06LU00",
    "Item Name": "LOGIMEC ULTRAS270",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Z_t8D6xqy6f1mOXNHoO2F8inI1_kOf2Q",
    "Product Image1": "./images/06LU00.png"
  },
  {
    "Item Code": "07LU00",
    "Item Name": "LOGIMEC ULTRAS430",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QadnGJ2MXV8ykX85FK0V-vG20G_PDTzy",
    "Product Image1": "./images/07LU00.png"
  },
  {
    "Item Code": "08LU00",
    "Item Name": "LOGIMEC ULTRAS570",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1083b40VGvCxgL_q70dtXDp9YRMwu4xYe",
    "Product Image1": "./images/08LU00.png"
  },
  {
    "Item Code": "09LU00",
    "Item Name": "LOGIMEC ULTRAS950",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Rvu0kfMjKo4EH-BjhbRh-qCl_0HMYGr9",
    "Product Image1": "./images/09LU00.png"
  },
  {
    "Item Code": "010LU0",
    "Item Name": "LOGIMEC ULTRAS1600",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RYxJHx7ChaSKexC3roBx5m5VEcFQ1TE1",
    "Product Image1": "./images/010LU0.png"
  },
  {
    "Item Code": "011LU0",
    "Item Name": "LOGIMEC ULTRAS25",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IlTE2CU6ZDLNW1KCgIKQpXOAG4NXLrtQ",
    "Product Image1": "./images/011LU0.png"
  },
  {
    "Item Code": "012LS0",
    "Item Name": "LOGIMEC SILENT50",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gtEd2PCBEVDf4LYw1vZqZoITT3kMqLw5",
    "Product Image1": "./images/012LS0.png"
  },
  {
    "Item Code": "013LS0",
    "Item Name": "LOGIMEC SILENT100",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JfQYUjsXSO-fdkDpBEWE6bwpXvjApjfB",
    "Product Image1": "./images/013LS0.png"
  },
  {
    "Item Code": "037UCL",
    "Item Name": "ULTRASONIC CLEANER LABORATORY 4 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YbjfvSzoCWjtJSmPPlRjII_soLPVeduw",
    "Product Image1": "./images/037UCL.png"
  },
  {
    "Item Code": "038UCL",
    "Item Name": "ULTRASONIC CLEANER LABORATORY 6 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=16AfsOU7K1EdtaaFMN5nSn39yeLKC7I31",
    "Product Image1": "./images/038UCL.png"
  },
  {
    "Item Code": "039UCL",
    "Item Name": "ULTRASONIC CLEANER LABORATORY 8 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1n0z7ZpOCqWSbZM0pFXIb4NQnqDsApXMU",
    "Product Image1": "./images/039UCL.png"
  },
  {
    "Item Code": "040UCL",
    "Item Name": "ULTRASONIC CLEANER LABORATORY 12 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VARRWKbgRacqNZlwHcYrwZMcGI1Y2bnR",
    "Product Image1": "./images/040UCL.png"
  },
  {
    "Item Code": "041UCL",
    "Item Name": "ULTRASONIC CLEANER LABORATORY 18 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=11Kpt6XteijUXA1t2EdNCDLl7tfHHwMnC",
    "Product Image1": "./images/041UCL.png"
  },
  {
    "Item Code": "042UCL",
    "Item Name": "ULTRASONIC CLEANER DRAGON 50 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JNzs42DiE3WGmz-UKWRj-dyZgdc2avrl",
    "Product Image1": "./images/042UCL.png"
  },
  {
    "Item Code": "043UBS",
    "Item Name": "ULTRASONIC BASKET STEEL 4 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ROMvyX_mpQLebpIlrLwkcNfdtKnkPFuj",
    "Product Image1": "./images/043UBS.png"
  },
  {
    "Item Code": "044UBS",
    "Item Name": "ULTRASONIC BASKET STEEL 8 LTR & 12 LTR O",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lCc7shmXyutOoZ_o_9-H9qEatIRQSh_e",
    "Product Image1": "./images/044UBS.png"
  },
  {
    "Item Code": "045UBS",
    "Item Name": "ULTRASONIC BASKET STEEL 8 LTR & 12 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FhOTB7L7kyH2ETUPS3n3G326LKnI2NIY",
    "Product Image1": "./images/045UBS.png"
  },
  {
    "Item Code": "046UBS",
    "Item Name": "ULTRASONIC BASKET STEEL 18 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hloxX1EFpx3MBMS4lUrHBezc5a9yoTDV",
    "Product Image1": "./images/046UBS.png"
  },
  {
    "Item Code": "047UBS",
    "Item Name": "ULTRASONIC BASKET STEEL 60 LTR",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aBR31VW-uO_ymoZi1kkdL5KWG6cz8xia",
    "Product Image1": "./images/047UBS.png"
  },
  {
    "Item Code": "048MCG",
    "Item Name": "MAGNETIC CLEANER 800 GRAM",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xBqiuPFT5Y0sv6sBK91Lm48jV3d5_59v",
    "Product Image1": "./images/048MCG.png"
  },
  {
    "Item Code": "049MCG",
    "Item Name": "MAGNETIC CLEANER 2000 GRAM",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=12sk-TLpe3pZM68lVwvOy2IrROSMHPK9z",
    "Product Image1": "./images/049MCG.png"
  },
  {
    "Item Code": "050MCG",
    "Item Name": "MAGNETIC CLEANER  3000 GRAM",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DvdGmTSWHNcGl0xjq3YZcSlnwyoGQ5IZ",
    "Product Image1": "./images/050MCG.png"
  },
  {
    "Item Code": "014GMT",
    "Item Name": "Galvanic Machine 4 Tanks (2L) + Move",
    "Category": "PLATING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lAmLLKNtnzY9K2b3PVyHU6WYZocBssNF",
    "Product Image1": "./images/014GMT.png"
  },
  {
    "Item Code": "051PMB",
    "Item Name": "PLATING MACHINE 2 BOTTLE",
    "Category": "PLATING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gmUbX08kGDTa6RhtapO9u6ELouUw3pRi",
    "Product Image1": "./images/051PMB.png"
  },
  {
    "Item Code": "052PMB",
    "Item Name": "PLATING MACHINE 3 BOTTLE",
    "Category": "PLATING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FC8AcZxKgKz-NWLWBbfb9Bu-AWrwrO3b",
    "Product Image1": "./images/052PMB.png"
  },
  {
    "Item Code": "071RPM",
    "Item Name": "RHODIUM PEN PLATING MACHINE",
    "Category": "PLATING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=18bvdVfYrpcz4q714vy91NRWIHb5dHY7n",
    "Product Image1": "./images/071RPM.png"
  },
  {
    "Item Code": "015EFK",
    "Item Name": "ELECTRIC FURNACE 1KG",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1OAw4DGvBvX0zdkkfNAhD44JDGpw4sn-u",
    "Product Image1": "./images/015EFK.png"
  },
  {
    "Item Code": "016EFK",
    "Item Name": "ELECTRIC FURNACE 2KG",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BGQC8zh8rOGaDDwY3D3YyudWe5DZ9yxH",
    "Product Image1": "./images/016EFK.png"
  },
  {
    "Item Code": "017EFK",
    "Item Name": "ELECTRIC FURNACE 3KG",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1AQWbmdm9PXGCaA4RgmW1qQ4A3m10plwK",
    "Product Image1": "./images/017EFK.png"
  },
  {
    "Item Code": "0127GM",
    "Item Name": "GOLD MELTING FURNACE MODEL SPBDH2 (2KG) 1 PHASE",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1GPAO8H3nWLUaYd54w0BTsaCCPTmZOxA8",
    "Product Image1": "./images/0127GM.png"
  },
  {
    "Item Code": "0128GM",
    "Item Name": "GOLD MELTING FURNACE MODEL SPBH5 (5KG)",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=15oLXfSh0tkV7sP8I60OAS0OCWLqR4oVQ",
    "Product Image1": "./images/0128GM.png"
  },
  {
    "Item Code": "0129GM",
    "Item Name": "GOLD MELTING FURNACE MODEL SPBB5 (8KG)",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1V5pGyWhzk7TPrXQmAAvB1t8NtG_bwB1l",
    "Product Image1": "./images/0129GM.png"
  },
  {
    "Item Code": "0132GM",
    "Item Name": "GOLD MELTING FURNACE MODEL SPB-TB5 (12KG)",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mFlRmEgD1nyT0nnCopH0aeR0e4Lb_JhZ",
    "Product Image1": "./images/0132GM.png"
  },
  {
    "Item Code": "0133EO",
    "Item Name": "ELECTRIC FURNACE 1 KG GF1100ND",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1l3E2UTWLo-ODahYyVvO1KxHVmL_nWF1m",
    "Product Image1": "./images/0133EO.png"
  },
  {
    "Item Code": "0134EO",
    "Item Name": "ELECTRIC FURANCE 2 KG GF1100N2D",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lpyiYYmzhu1_LAkaUwhO1d_phVzLNS_-",
    "Product Image1": "./images/0134EO.png"
  },
  {
    "Item Code": "0135EO",
    "Item Name": "ELECTRIC FURANCE 3 KG GF1100N3D",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XHYCwcEVbuxmZPf1-I1tyWOhQLpCbp6Z",
    "Product Image1": "./images/0135EO.png"
  },
  {
    "Item Code": "0136EO",
    "Item Name": "ELECTRIC FURANCE 4 KG GF1100N4D",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PBTKvOoKxXWIp0IT25d-Bz47fBgApFcO",
    "Product Image1": "./images/0136EO.png"
  },
  {
    "Item Code": "0137RG",
    "Item Name": "RAPID GAS MELTING FURNACE GF 502  (5KG)",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kO-JuGGxQdMIk87v3LCKqWuhg1xm-ki6",
    "Product Image1": "./images/0137RG.png"
  },
  {
    "Item Code": "0138RG",
    "Item Name": "RAPID GAS MELTING FURNACE GF 510  (8KG)",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JxBalux50UaImhRYhdozcG8CcXoXeg7s",
    "Product Image1": "./images/0138RG.png"
  },
  {
    "Item Code": "018EFH",
    "Item Name": "ELECTRIC FURNACE HEATING COIL 1 KG",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1p6XygVMPvdLdPPuStjFMf-LANmztmV37",
    "Product Image1": "./images/018EFH.png"
  },
  {
    "Item Code": "019EFH",
    "Item Name": "ELECTRIC FURNACE HEATING COIL 2 KG",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SG-GYGIis-fOeypr5ENgYn22nkNp2-6-",
    "Product Image1": "./images/019EFH.png"
  },
  {
    "Item Code": "020EFH",
    "Item Name": "ELECTRIC FURNACE HEATING COIL 3 KG",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=19KXhQ2lwKKURaM8UV-uNWINb13ynKnaX",
    "Product Image1": "./images/020EFH.png"
  },
  {
    "Item Code": "021TCE",
    "Item Name": "THERMO COUPLE ELECTRIC FURNACE",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1onuRDpXlrCIJEPAQHLG9CgiEcqAmbKbl",
    "Product Image1": "./images/021TCE.png"
  },
  {
    "Item Code": "022UPB",
    "Item Name": "UTRASONIC PCB BOARD FOR MODEL 270,430,570",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QimdU2FUcb0kSwR18kwOGQ0LnIPYPjxL",
    "Product Image1": "./images/022UPB.png"
  },
  {
    "Item Code": "023UPB",
    "Item Name": "ULTRSONIC PCB BOARD FOR MODEL 950,1600",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BXfa46FopQ7_TF0kKIwoUSoxg01tvqxM",
    "Product Image1": "./images/023UPB.png"
  },
  {
    "Item Code": "024UPB",
    "Item Name": "ULTRSONIC PCB BOARD FOR MODEL 25LTR TO 200L",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Am9vNmaG4tYrIh8Ai3gS9vwMZcGJslpP",
    "Product Image1": "./images/024UPB.png"
  },
  {
    "Item Code": "027VPB",
    "Item Name": "VACUM POMP BUSCH 40M2 3 PHASE",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_lilfXQI1DdotnANKcH3ukwNSAebAnr4",
    "Product Image1": "./images/027VPB.png"
  },
  {
    "Item Code": "058SSM",
    "Item Name": "STONE SETTING MACHINE DOUBLE",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=19cCFL9Bhf_p2Vw4lO1rE7TYSJz8gI7BD",
    "Product Image1": "./images/058SSM.png"
  },
  {
    "Item Code": "068RVR",
    "Item Name": "RUBBER VULCANIZER",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lfC6UueUpn8OTqgoDVM3ww02zBLz_KON",
    "Product Image1": "./images/068RVR.png"
  },
  {
    "Item Code": "028GSB",
    "Item Name": "GAMMA STEEL 6310N BOX OF 100 BRUSH",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Bv9u9B5AcBAzUqS0sWTblSBAVSyVK9t5",
    "Product Image1": "./images/028GSB.png"
  },
  {
    "Item Code": "067HLC",
    "Item Name": "HELUK 4 LINE CONIC BRUSH",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1O-2G75oW7wlY6MutbNFwC6UrGPcSNxsF",
    "Product Image1": "./images/067HLC.png"
  },
  {
    "Item Code": "076GSW",
    "Item Name": "GREEN SCOTCH WITH ABRASIVE 7MM P 320",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1W_3rxVrXPxRvXECHogFvYzDBwgnvhoei",
    "Product Image1": "./images/076GSW.png"
  },
  {
    "Item Code": "077GSA",
    "Item Name": "GREEN SCOTCH WITH ABRASIVE 7MM P 400",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IC4ZFM7Snj7y_IUkzW9HsiKQv0_Y8JNB",
    "Product Image1": "./images/077GSA.png"
  },
  {
    "Item Code": "078GSA",
    "Item Name": "GREEN SCOTCH WITH ABRASIVE 15MM P 150",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1inebeyChIxEt4YcdgVLeeGglrI-lAjgm",
    "Product Image1": "./images/078GSA.png"
  },
  {
    "Item Code": "079GSA",
    "Item Name": "GREEN SCOTCH WITH ABRASIVE 15MM P 180",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LoXsGLiflVX2Va4PQB981mC-WEAPOhgI",
    "Product Image1": "./images/079GSA.png"
  },
  {
    "Item Code": "080GSA",
    "Item Name": "GREEN SCOTCH WITH ABRASIVE 15MM P 220",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DdzfGZ1P1eJG-FPDCGA2JHgQVELa0eBm",
    "Product Image1": "./images/080GSA.png"
  },
  {
    "Item Code": "081GSA",
    "Item Name": "GREEN SCOTCH WITH ABRASIVE 15MM P 240",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SLoTWY2neNTZvU0-png76BRl7OlSCmPE",
    "Product Image1": "./images/081GSA.png"
  },
  {
    "Item Code": "082GSA",
    "Item Name": "GREEN SCOTCH WITH ABRASIVE 15MM P 280",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mPNwaMS5QT3c8Daa1CusjPa0KL9AA0pI",
    "Product Image1": "./images/082GSA.png"
  },
  {
    "Item Code": "083GSA",
    "Item Name": "GREEN SCOTCH WITH ABRASIVE 15MM P 320",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xwiu_JokrlQ2wuP8K-6S0dnWCz6QWz1g",
    "Product Image1": "./images/083GSA.png"
  },
  {
    "Item Code": "084GSA",
    "Item Name": "GREEN SCOTCH WITH ABRASIVE 15MM P 400",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=16cpQI_nWFVgKtQIurSa74WjNxCJejBcZ",
    "Product Image1": "./images/084GSA.png"
  },
  {
    "Item Code": "085GSA",
    "Item Name": "GREEN SCOTCH WITH ABRASIVE 15MM P 500",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1e2hK0Eg4lYj7z4OYN3z-exYcacBP-KGM",
    "Product Image1": "./images/085GSA.png"
  },
  {
    "Item Code": "086GSA",
    "Item Name": "GREEN SCOTCH WITH ABRASIVE 15MM P 600",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qKdeCv2QzuXvbYel8FDIOAV9DB_Yn-8k",
    "Product Image1": "./images/086GSA.png"
  },
  {
    "Item Code": "087BSA",
    "Item Name": "BROWN SCOTCH WITH ABRASIVE 15MM P 240",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hP62FT0oSLbIcwgakiHR1uJ6H54f5wb6",
    "Product Image1": "./images/087BSA.png"
  },
  {
    "Item Code": "088BSA",
    "Item Name": "BROWN SCOTCH WITH ABRASIVE 15MM P 280",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=15_iBlz-4X_pH487eBiNXoxTNxCjO6AdP",
    "Product Image1": "./images/088BSA.png"
  },
  {
    "Item Code": "089BSA",
    "Item Name": "BROWN SCOTCH WITH ABRASIVE 15MM P 320",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1T3g4EkurcmTzoqpcukb14wG1qrg07mTl",
    "Product Image1": "./images/089BSA.png"
  },
  {
    "Item Code": "090BSA",
    "Item Name": "BROWN SCOTCH WITH ABRASIVE 15MM P 400",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Y60BfRPchPEotdkdjqJZJON6k84L6a1l",
    "Product Image1": "./images/090BSA.png"
  },
  {
    "Item Code": "091BSA",
    "Item Name": "BROWN SCOTCH WITH ABRASIVE 30MM P 240",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=12RXp3hNXlq3yJJHCx6e38KT_olOZHT_M",
    "Product Image1": "./images/091BSA.png"
  },
  {
    "Item Code": "092BSA",
    "Item Name": "BROWN SCOTCH WITH ABRASIVE 30MM P 280",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Jz-7LEdZNDw6AaQ1R5P9D3yW62tP0s_N",
    "Product Image1": "./images/092BSA.png"
  },
  {
    "Item Code": "093BSA",
    "Item Name": "BROWN SCOTCH WITH ABRASIVE 30MM P 320",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=10eKNEC55cWEhcq1FJossOPLXV8agVhIk",
    "Product Image1": "./images/093BSA.png"
  },
  {
    "Item Code": "094BSA",
    "Item Name": "BROWN SCOTCH WITH ABRASIVE 30MM P 400",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1OTUdFgmuXnh4hiXeqrpv1DmMAqqhQOgJ",
    "Product Image1": "./images/094BSA.png"
  },
  {
    "Item Code": "097RGB",
    "Item Name": "ROTIFIX GREEN BRUSH 4 LINE",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1b4Pxq_-AXwbQRUgW16t0sapYK9kPTIZy",
    "Product Image1": "./images/097RGB.png"
  },
  {
    "Item Code": "029BCI",
    "Item Name": "BLUE CUTTER ITALY CURVED",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rQM6PBszUUJkX1NzblaL7DnCs7kC1gvt",
    "Product Image1": "./images/029BCI.png"
  },
  {
    "Item Code": "030BCI",
    "Item Name": "BLUE CUTTER ITALY STRAIGHT",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WxOGpxxX--Af-SspL3R4fiRtjUBV89Vb",
    "Product Image1": "./images/030BCI.png"
  },
  {
    "Item Code": "031ACB",
    "Item Name": "ARABIC CUTTER BLACK",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1g2jOUjIMT1zOkx8tsvIoWYJMpvATGqor",
    "Product Image1": "./images/031ACB.png"
  },
  {
    "Item Code": "033CC0",
    "Item Name": "CERAMIC CRUCIBLE 69X66 - S05",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1EAW8CsycvxUf5EPxylmrAW9NggGMtl3J",
    "Product Image1": "./images/033CC0.png"
  },
  {
    "Item Code": "034CC0",
    "Item Name": "CERAMIC CRUCIBLE 89X86 - S1",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1b2JZroluQ7khdlEXxgEBvxIuzY7gFOV_",
    "Product Image1": "./images/034CC0.png"
  },
  {
    "Item Code": "099CCM",
    "Item Name": "C500 CERAMIC MELTING CRUCIBLES  60X40X69MM",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1trAVOOe_4tKPKqASn1FeuWt8U8jRhFZG",
    "Product Image1": "./images/099CCM.png"
  },
  {
    "Item Code": "0100CC",
    "Item Name": "C1000 CERAMIC MELTING CRICIBLE 80X55X94MM",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VMm0jODq7ukLIeBpaUSAcp8qIl22a3Yb",
    "Product Image1": "./images/0100CC.png"
  },
  {
    "Item Code": "0101GC",
    "Item Name": "100 GRAM CERAMIC BOWL  57.5 X 24 MM",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BkHx4CSBha8z7CUH4V1CNDza8ghhMpHD",
    "Product Image1": "./images/0101GC.png"
  },
  {
    "Item Code": "0102GC",
    "Item Name": "150 GRAM CERAMIC BOWL 66 X 30 MM",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=13nAW2CE2CMwC49Ay3mMXBQ1tHOtk-ZkG",
    "Product Image1": "./images/0102GC.png"
  },
  {
    "Item Code": "0103GC",
    "Item Name": "250 GRAM CERAMIC BOWL 78.6 X  34 MM",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tPmhdt7TE5m84IBkHsq21g54x8la_kPX",
    "Product Image1": "./images/0103GC.png"
  },
  {
    "Item Code": "0104GC",
    "Item Name": "500 GRAM CERAMIC BOWL 88 X 40 MM",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wiXfO6Et_8ltavr-i4rAKViEy3h5o6Bf",
    "Product Image1": "./images/0104GC.png"
  },
  {
    "Item Code": "0105GC",
    "Item Name": "750 GRAM CERAMIC BOWL 97 X 41 MM",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1J9QbnqiW9gIPa6mA2GpIUz6e6rKAJJwO",
    "Product Image1": "./images/0105GC.png"
  },
  {
    "Item Code": "0106KC",
    "Item Name": "1 KG  CERAMIC BOWL 104 X 45 MM",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZLfcEPYrF58DykssYuFDEuIa0Lqc2DXw",
    "Product Image1": "./images/0106KC.png"
  },
  {
    "Item Code": "0107KC",
    "Item Name": "1.5 KG CERAMIC BOWL 120 X 50.4 MM",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-QpX2KsHdcswx4c34mzxdH4Ms38NPTL3",
    "Product Image1": "./images/0107KC.png"
  },
  {
    "Item Code": "0108KC",
    "Item Name": "2.5 KG  CERAMIC BOWL 137.5 X 55 MM",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1H9_4m7SWr-UzYLA4FwGeeF5xQ7odUq3h",
    "Product Image1": "./images/0108KC.png"
  },
  {
    "Item Code": "0109KG",
    "Item Name": "1 KG GRAPHITE MELTING CRUCIBLES A4 QUALITY",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=11VhldHSsYnO-3UqjKNQrAAENv8yPZwGT",
    "Product Image1": "./images/0109KG.png"
  },
  {
    "Item Code": "0110GM",
    "Item Name": "2 KG GRAPHTE MELTING CRUCIBLES A4 QUALITY",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RszHhG3oZJcoz_8Q1O8zsjpk4xVqnMtd",
    "Product Image1": "./images/0110GM.png"
  },
  {
    "Item Code": "0111KG",
    "Item Name": "3 KG GRAPHITE MELTING CRUCIBLES A4 QUALITY",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kXPmw1o5zulct-KmI8AyAIeVaVAfycR-",
    "Product Image1": "./images/0111KG.png"
  },
  {
    "Item Code": "0112KG",
    "Item Name": "1 KG GRAPHITE MELTING CRUCIBLES B4 QUALITY",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=11se9QZZBsIgE8JiQuy4Yres4DZLTus9Q",
    "Product Image1": "./images/0112KG.png"
  },
  {
    "Item Code": "0113KG",
    "Item Name": "2 KG GRAPHTE MELTING CRUCIBLES B4 QUALITY",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SrVjjngeldtPedFD8LpvCV_pqFTz1OEd",
    "Product Image1": "./images/0113KG.png"
  },
  {
    "Item Code": "0114KG",
    "Item Name": "3 KG GRAPHITE MELTING CRUCIBLES B4 QUALITY",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gT-SfeZxsdmY0bWsUER4ApCcqpo3cAPi",
    "Product Image1": "./images/0114KG.png"
  },
  {
    "Item Code": "0115YK",
    "Item Name": "YASUI K2 8 KW GRAPHITE CASTING CRUCIBLE",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1C1Q9YM6CbqjNv5X9qUVS9Jj-WOYOVgrA",
    "Product Image1": "./images/0115YK.png"
  },
  {
    "Item Code": "0116YK",
    "Item Name": "YASUI K2 8 KW GRAPHITE STOPPER",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Zi2ydMnSyjH21-O0iSkPFB-c8bpNi-Xf",
    "Product Image1": "./images/0116YK.png"
  },
  {
    "Item Code": "0117YK",
    "Item Name": "YASUI KT 18S GRAPHITE CASTING CRUCIBLE",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pN_WRHrH5UkTfzr-wHEZ4vJvBlLzYZER",
    "Product Image1": "./images/0117YK.png"
  },
  {
    "Item Code": "0118YK",
    "Item Name": "YASUI KT 18S GRAPHITE STOPPER",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ygCyupP3jl2R7jbcQCHU_TwsaG5M4aAj",
    "Product Image1": "./images/0118YK.png"
  },
  {
    "Item Code": "0119YK",
    "Item Name": "YASUI K2 5 KW GRAPHITE CASTING CRUCIBLE",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=146ifdmN48EVj-Ic9BYRaR0KSVHKWps8Q",
    "Product Image1": "./images/0119YK.png"
  },
  {
    "Item Code": "0120YK",
    "Item Name": "YASUI K2 5 KW GRAPHITE STOPPER",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1a4ZWM2yA-u4Ru2LEeFUnqtJ2_IFF-lXv",
    "Product Image1": "./images/0120YK.png"
  },
  {
    "Item Code": "0121YK",
    "Item Name": "YASUI K3 UP  GRAPHITE CASTING CRUCIBLE",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UEc8lu5qFv82gGYjkv3UEFAbsNjHU8jB",
    "Product Image1": "./images/0121YK.png"
  },
  {
    "Item Code": "0122YK",
    "Item Name": "YASUI K3 UP GRAPHITE STOPPER",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=11Pwnqv4Dcg2S5mjpzX8WJL1W5A3-GAhd",
    "Product Image1": "./images/0122YK.png"
  },
  {
    "Item Code": "0123IV",
    "Item Name": "INDUTHERM VC400/450 GRAPHITE CASTING CRUCIBLE",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pN_M-O0ijBajDyrAEuzEUDj-0f4V4JAP",
    "Product Image1": "./images/0123IV.png"
  },
  {
    "Item Code": "0124IV",
    "Item Name": "INDUTHERM VC400/450 GRAPHITE STOPPER",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=176TXXvj1gs7aB6T1hoBsHiCvXandJJAy",
    "Product Image1": "./images/0124IV.png"
  },
  {
    "Item Code": "0125IV",
    "Item Name": "INDUTHERM VC600 GRAPHITE CASTING CRUCIBLE",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sTtWugfqu9SlR2u8uxk7FBAQM3uKVMi6",
    "Product Image1": "./images/0125IV.png"
  },
  {
    "Item Code": "0126IV",
    "Item Name": "INDUTHERM VC600 GRAPHITE STOPPER",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=15oIWGPPVBa1PpFpyevVmcr1ZjNcZcX2M",
    "Product Image1": "./images/0126IV.png"
  },
  {
    "Item Code": "0139CC",
    "Item Name": "CERAMIC CRUCIBLE SHAPE A WITH GLUE",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1J8AruZLf_OofONlwdmuo6nXCmq4oDp_x",
    "Product Image1": "./images/0139CC.png"
  },
  {
    "Item Code": "0140PA",
    "Item Name": "PRESSED A SHAPE CERAMIC CRUCIBLES",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QmUVcQxtWDcqsAgtjval1kOP39C1wi82",
    "Product Image1": "./images/0140PA.png"
  },
  {
    "Item Code": "036LSH",
    "Item Name": "LIQUID SILICONE HT33 5KG JERKIN (A/B) PER/KG",
    "Category": "RUBBER",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LhXt4Xwx1dRRLhRPRMLbNY-4Sk5eb3S7",
    "Product Image1": "./images/036LSH.png"
  },
  {
    "Item Code": "053DSP",
    "Item Name": "DESKTOP SINGLE POLISHING MACHINE",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DntlyfyqBLkX-uU5tOXAbMhV6ENDRAnU",
    "Product Image1": "./images/053DSP.png"
  },
  {
    "Item Code": "054DDP",
    "Item Name": "DESKTOP DOUBLE POLISHING MACHINE",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IytrD8M5BVo3lk4eQvVrFdqKw2_ZRNx8",
    "Product Image1": "./images/054DDP.png"
  },
  {
    "Item Code": "055PMM",
    "Item Name": "POLISHING MACHINE MEDIUM CASE DUBSTER",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VgeuSB_dSeMT9DKSEd1bE3a0mY60K_ho",
    "Product Image1": "./images/055PMM.png"
  },
  {
    "Item Code": "056PMM",
    "Item Name": "POLISHING MACHINE MEDIUM CASE GLADYATOR",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Kp5I9RJajTvdWaUjTEEn3MaCmjkqC1pg",
    "Product Image1": "./images/056PMM.png"
  },
  {
    "Item Code": "057PMB",
    "Item Name": "POLISHING MACHINE BIG CASE DUBSTER",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=142PdPHYUwYHMhh7-oG-NknQGofmVTD-_",
    "Product Image1": "./images/057PMB.png"
  },
  {
    "Item Code": "070VPM",
    "Item Name": "VACUUM POLISHING MACHINE SINGLE",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HKw_YhZAuFhN6avCcBDXc4jnhXcv2XbX",
    "Product Image1": "./images/070VPM.png"
  },
  {
    "Item Code": "059PPP",
    "Item Name": "PLATINEX PLATING PEN II",
    "Category": "PLATING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_cwtXVWfAiVmnkgH6fIX4JJES8IYCfqK",
    "Product Image1": "./images/059PPP.png"
  },
  {
    "Item Code": "060PPP",
    "Item Name": "PLATINEX PLATING PEN III",
    "Category": "PLATING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lTzD9WtN-8iSheU0Yotey9DsEX9lGxWW",
    "Product Image1": "./images/060PPP.png"
  },
  {
    "Item Code": "061ECS",
    "Item Name": "ECONOMIC CLIPS",
    "Category": "PLATING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QvcN0o70_irQP3TxLcnLrshN7Xr2iRwg",
    "Product Image1": "./images/061ECS.png"
  },
  {
    "Item Code": "062ITF",
    "Item Name": "INDUCTION TONG F3",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VEKXrzqdUjVM5NQydyGhoLN5Fh-5C62Q",
    "Product Image1": "./images/062ITF.png"
  },
  {
    "Item Code": "063ITF",
    "Item Name": "INDUCTION TONG F4",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BN2df11paxA-WWOR19DPud5DpLR4wMAx",
    "Product Image1": "./images/063ITF.png"
  },
  {
    "Item Code": "064ITF",
    "Item Name": "INDUCTION TONG F5",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kbcOSYs8MnOa3BGQ6UaTFf2C6b8R2_Lz",
    "Product Image1": "./images/064ITF.png"
  },
  {
    "Item Code": "065ITF",
    "Item Name": "INDUCTION TONG F6",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1cd82z5FbiYBhy9H0w19ggTdvzdz68EFB",
    "Product Image1": "./images/065ITF.png"
  },
  {
    "Item Code": "066ITF",
    "Item Name": "INDUCTION TONG F9",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aMWyvcoFHn30hmVL7w3dQtwmswJ6BNla",
    "Product Image1": "./images/066ITF.png"
  },
  {
    "Item Code": "069SFM",
    "Item Name": "SPRUE FORMER 13 MM",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sFVfNtYnH7dD_-jpQyJ3ubyEcP0XYq9z",
    "Product Image1": "./images/069SFM.png"
  },
  {
    "Item Code": "072VMB",
    "Item Name": "VENUS MOTOR BM25A",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vwFdeGlR5CEEjOyie-r_uF45T-jCpmkx",
    "Product Image1": "./images/072VMB.png"
  },
  {
    "Item Code": "073UMB",
    "Item Name": "UNIVERSAL MOTOR BM23C",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=18p8woS05bRpsTWko2ZfYfCcoCQiJrjjD",
    "Product Image1": "./images/073UMB.png"
  },
  {
    "Item Code": "074UMB",
    "Item Name": "UNIVERSAL MOTOR BM23A",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FDFA97nVG3UP4yaqtfBDFdXyE4YfZt7t",
    "Product Image1": "./images/074UMB.png"
  },
  {
    "Item Code": "075UMB",
    "Item Name": "UNIVERSAL MOTOR BM24A",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=12vpmt5IDGOaX6RZIW3_IU1N-gB-7v65X",
    "Product Image1": "./images/075UMB.png"
  },
  {
    "Item Code": "098SMC",
    "Item Name": "SPIRAL METALIC",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RiWjZ5hhxEMtGYvzh8XczKwom0Wq0wQX",
    "Product Image1": "./images/098SMC.png"
  },
  {
    "Item Code": "095PFS",
    "Item Name": "POLISHING FILTER STANDART 65 X45CM",
    "Category": "FILTER BAGS & ULRASONIC BAGS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iTi8N-RZTDHHkjmxrdff28N1zpHnTLli",
    "Product Image1": "./images/095PFS.png"
  },
  {
    "Item Code": "096PFT",
    "Item Name": "POLISHING FILTER TRIPLE 65 X45CM",
    "Category": "FILTER BAGS & ULRASONIC BAGS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1cVhmxC63pgZne_uGkmcZ_DPrKETO01Ia",
    "Product Image1": "./images/096PFT.png"
  },
  {
    "Item Code": "0130CF",
    "Item Name": "CHILLER FOR MELTING FURNACE MODEL SPB-3AC",
    "Category": "CHILLERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jsnBx6H03AVaWJTMjWKsQwOejjT7_zdy",
    "Product Image1": "./images/0130CF.png"
  },
  {
    "Item Code": "0131CF",
    "Item Name": "CHILLER FOR MELTING FURNACE MODEL SPB-5AC",
    "Category": "CHILLERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1x2xUs9XDM4_tUR-Ht4q_F-p1Scwbp6mS",
    "Product Image1": "./images/0131CF.png"
  },
  {
    "Item Code": "0238CG",
    "Item Name": "CRUCIBLE GRAP.+ CERAM.VT.FIX KG 02 MANFREDI CG150 - CEIA F3",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1anQUuvP3bnEeOoBnKfVXzxV2SXiyb0M9",
    "Product Image1": "./images/0238CG.png"
  },
  {
    "Item Code": "0239CG",
    "Item Name": "CRUCIBLE GRAP.+ CERAM.VT FIX KG03 CEIA F3",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WemrsR33LRIyX6iueFvm0LQNaeTIykmv",
    "Product Image1": "./images/0239CG.png"
  },
  {
    "Item Code": "0240GC",
    "Item Name": "GRAPHITE CRUCIBLE + CERAM.VT.FIX KG 04 CEIA F4/MANFREDI CG350 WITH COLLAR",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=149PtCs0FU-zrF7ryxH1rLGDw1C5y6Zob",
    "Product Image1": "./images/0240GC.png"
  },
  {
    "Item Code": "0241GC",
    "Item Name": "GRAPHITE CRUCIBLE +CERAM.VT.FIX KG 05 GALLONI",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=17csay9UMR_RsTkG-dCVHANpDoI6tq_j-",
    "Product Image1": "./images/0241GC.png"
  },
  {
    "Item Code": "0242GC",
    "Item Name": "GRAPHITE CRUCIBLE + CERAM.VT.FIX KG 06 CEIA F5 WITH COLLAR",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1b0FXRVblwNfwfx8BnRv_OtcIQJ0FuigL",
    "Product Image1": "./images/0242GC.png"
  },
  {
    "Item Code": "0243GC",
    "Item Name": "GRAPHITE CRUCIBLE + CERAM.VT.FIX GALLONI /CEIA F9 KG 10 GRAPHITE WITH COLLAR",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1li3aF9b3ADccweSlVXA38g54Mx-cxIlP",
    "Product Image1": "./images/0243GC.png"
  },
  {
    "Item Code": "0244GC",
    "Item Name": "CRUCIBLE GRAP.+ CERAM.VT.FIX KG 12 CEIA F12 SALIENT GRAPHITE",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ofTWRb7epIxzkHrAT8Cg7CbON64XAgEq",
    "Product Image1": "./images/0244GC.png"
  },
  {
    "Item Code": "0245GC",
    "Item Name": "GOLD STAR INVESTMENT POWDER  OMEGA /22.5KG SACK",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qduaeRrRp4dtB6E_vTO3TohwQDfSkfZc",
    "Product Image1": "./images/0245GC.png"
  },
  {
    "Item Code": "0246GC",
    "Item Name": "GOLD STAR INVESTMENT POWDER  METACAST/22.5KG SACK",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1W8cU6U_NQj7jC3U3au0vi7Sdy8oHlFr3",
    "Product Image1": "./images/0246GC.png"
  },
  {
    "Item Code": "0251IW",
    "Item Name": "Gold Star Omega+Investment Casting Powder 22.5KG Poly Bag",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qETDHqUuLfCPWQNa6NDQV6jzPzXPURpg",
    "Product Image1": "./images/0251IW.png"
  },
  {
    "Item Code": "0252DF",
    "Item Name": "Gold Star METACAST Casting Plaster 22.5KG Poly Bag",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uGENJasN9TvSdLvPLmXy7_XAVbOHsPMH",
    "Product Image1": "./images/0252DF.png"
  },
  {
    "Item Code": "0247GC",
    "Item Name": "Gold Star Bead 210 Pink",
    "Category": "WAX",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZU4UAQOpl-OxJ3ksZ3mJIQPwp6s4BtxZ",
    "Product Image1": "./images/0247GC.png"
  },
  {
    "Item Code": "0248GC",
    "Item Name": "GOLD STAR WAX BEAD 110 AQUA COLOUR",
    "Category": "WAX",
    "Product Image": "https://drive.google.com/uc?export=download&id=16BltmE5-3RyaTjaLFc0AR-iF21DJepH6",
    "Product Image1": "./images/0248GC.png"
  },
  {
    "Item Code": "0249GC",
    "Item Name": "INJECTION WAX R36WF FILIGREE PINK",
    "Category": "WAX",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LedpKVPHMTsmWQlWrd7jCPEKXr-uh7tE",
    "Product Image1": "./images/0249GC.png"
  },
  {
    "Item Code": "0250GC",
    "Item Name": "INJECTION WAX R37WF TURQUOISE",
    "Category": "WAX",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WciA8mveULryl1sFdqbqn1gxShJrmpjP",
    "Product Image1": "./images/0250GC.png"
  },
  {
    "Item Code": "0253CS",
    "Item Name": "CASTALDO SUPER HIGHSTRENGTH SILICONE",
    "Category": "RUBBER",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KuIoHG9Id_1ONGTOirU3qxNR5A8e1k3C",
    "Product Image1": "./images/0253CS.png"
  },
  {
    "Item Code": "0254CE",
    "Item Name": "CASTALDO ECONOSIL SILICONE",
    "Category": "RUBBER",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SUFoPt2kOaQ18MShMohV9jCwx3gwguGW",
    "Product Image1": "./images/0254CE.png"
  },
  {
    "Item Code": "0255CS",
    "Item Name": "CASTALDO SUPERSTRECH SILICONE",
    "Category": "RUBBER",
    "Product Image": "https://drive.google.com/uc?export=download&id=1nKFAdSdwgE9NT8aiczudIhtpoTgUvJQ_",
    "Product Image1": "./images/0255CS.png"
  },
  {
    "Item Code": "0256KS",
    "Item Name": "KT-6808 SMALL BARREL POLISHING MACHINE",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Q75xwXHTooJqWsZPxnKHEqX0MYH8mt12",
    "Product Image1": "./images/0256KS.png"
  },
  {
    "Item Code": "0257KP",
    "Item Name": "KT-2000 POLISHING MACHINE",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dOk_5Tb7REwMv3W3CJkUURY0vV9KvBno",
    "Product Image1": "./images/0257KP.png"
  },
  {
    "Item Code": "0258KP",
    "Item Name": "KT-245 POLISHING TUMBLER",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mt7hCgrJeFegnImxkXbTIpy6N2bPSGK5",
    "Product Image1": "./images/0258KP.png"
  },
  {
    "Item Code": "0259KB",
    "Item Name": "KT-250 BARREL POLISHING MACHINE",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KvqyPl6dGeVVHwbigIaXRfzfQiLdy-0-",
    "Product Image1": "./images/0259KB.png"
  },
  {
    "Item Code": "0260EL",
    "Item Name": "EXTRA LARGE POLISHING MACHINE 3010",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-VQzknwmcD-m7a8YNqCV3OaLMxoWjyUO",
    "Product Image1": "./images/0260EL.png"
  },
  {
    "Item Code": "0261MT",
    "Item Name": "150# MAGNETIC TUMBLER",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1w6XTGqtXX25OGFu5_K37g5aB2cPk3Cny",
    "Product Image1": "./images/0261MT.png"
  },
  {
    "Item Code": "0262MT",
    "Item Name": "186# MAGNETIC TUMBLER",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yqJZMiimZWBNorY6FZQA-fUsOE5hCnCR",
    "Product Image1": "./images/0262MT.png"
  },
  {
    "Item Code": "0263SM",
    "Item Name": "205 SQ# MAGNETIC TUMBLER",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bQHGcDH5t9sArdddRcJvS6LwZ4b1kmTn",
    "Product Image1": "./images/0263SM.png"
  },
  {
    "Item Code": "0264MT",
    "Item Name": "220# MAGNETIC TUMBLER",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=16mDzrm4lB6tf-T3_cuvjbzJ06i05Kgnf",
    "Product Image1": "./images/0264MT.png"
  },
  {
    "Item Code": "0265MT",
    "Item Name": "260# MAGNETIC TUMBLER",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1afk66tCYUAKJoua1181zWnAwfcMjMdJl",
    "Product Image1": "./images/0265MT.png"
  },
  {
    "Item Code": "0266LS",
    "Item Name": "6L STEAMER",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1upHSpmnAdgbkqdA6c60pWwaCWGM_GMpq",
    "Product Image1": "./images/0266LS.png"
  },
  {
    "Item Code": "0267LS",
    "Item Name": "12L STEAMER",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1cmQBKkqea0Zue9RkwKraU5rsIOhJWj4s",
    "Product Image1": "./images/0267LS.png"
  },
  {
    "Item Code": "0268CF",
    "Item Name": "CC-30 FOREDOM FLEX SHAFT",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1F0k3a6jMVUlaDcvUXJyeoQzaBQYP4uMj",
    "Product Image1": "./images/0268CF.png"
  },
  {
    "Item Code": "0269SF",
    "Item Name": "SR FOREDOM FLEX SHAFT",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1O9waxt_xoeniJNxJnLH2OPLTENrfsSTy",
    "Product Image1": "./images/0269SF.png"
  },
  {
    "Item Code": "0270KF",
    "Item Name": "KT-A15 FLEX SHAFT",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zo2hFm184yAqLVPP7LBbpGFNRJk6vWZg",
    "Product Image1": "./images/0270KF.png"
  },
  {
    "Item Code": "0271SF",
    "Item Name": "SR FOREDOM PEDAL",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1daxsoddQDXx5UygmZR9pzcuXJDbAPbk5",
    "Product Image1": "./images/0271SF.png"
  },
  {
    "Item Code": "0272CH",
    "Item Name": "CRANE HEAD",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1teYBd_uzq5QepH5B51nBkbxAonw-5Hnv",
    "Product Image1": "./images/0272CH.png"
  },
  {
    "Item Code": "0273FH",
    "Item Name": "FOREDOM HANDPIECE (T30)",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=17Tc7oQvwgGgphKibB-1y3bfom7YfrUAd",
    "Product Image1": "./images/0273FH.png"
  },
  {
    "Item Code": "0274ET",
    "Item Name": "EUROPEAN T-30 HANDPIECE",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VFS813JJvD57lL3q1vfxXqixPHscQUsv",
    "Product Image1": "./images/0274ET.png"
  },
  {
    "Item Code": "0275TH",
    "Item Name": "T-30 HANDPIECE SMALL",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lEng8trfpkQyZ-Q83g-fw_pmTs0kpp16",
    "Product Image1": "./images/0275TH.png"
  },
  {
    "Item Code": "0276HT",
    "Item Name": "HANDLE TYPE GRINDING MACHINE",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Z3_Mn0vPgCXhr1Td2ZsVkcPatGpTfR_m",
    "Product Image1": "./images/0276HT.png"
  },
  {
    "Item Code": "0277LU",
    "Item Name": "2 LITER ULTARSONIC CLEANER M.UC.200HD",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JukFYtht2ngKDVpxmUXUeQnhPtePnjEL",
    "Product Image1": "./images/0277LU.png"
  },
  {
    "Item Code": "0278LU",
    "Item Name": "3 LITER ULTRASONIC CLEANER M.UC.230HD",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sMUPEiGurwUa08z1e48ti1argMzZYUkC",
    "Product Image1": "./images/0278LU.png"
  },
  {
    "Item Code": "0279LU",
    "Item Name": "4 LITER ULTRASONIC CLEANER M.UC.240HD",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1EGuzepu08oqBFPln_hbXHkZU0GlWHz0a",
    "Product Image1": "./images/0279LU.png"
  },
  {
    "Item Code": "0280LU",
    "Item Name": "4 LITER ULTRASONIC CLEANER M.UC.340HD",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=14MPTjyFRuO_1lRLbMrP9xfUKmXmZlpjI",
    "Product Image1": "./images/0280LU.png"
  },
  {
    "Item Code": "0281LU",
    "Item Name": "6 LITER ULTRASONIC CLEANER M.UC.360HD",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZReMwF0vVOw29j9qWFkzjpFlXkxdirVs",
    "Product Image1": "./images/0281LU.png"
  },
  {
    "Item Code": "0282LU",
    "Item Name": "10 LTR ULTRASONIC CLEANER M.UC.410HD",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SOHCMqZh-wt7_Hm-2zAUxAv31TZOpr4a",
    "Product Image1": "./images/0282LU.png"
  },
  {
    "Item Code": "0283LU",
    "Item Name": "15 LTR ULTRASONIC CLEANER M.UC.615HD",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QOVj6lI7NSIpL6lzJErNAJ0JyAtisf0-",
    "Product Image1": "./images/0283LU.png"
  },
  {
    "Item Code": "0284LU",
    "Item Name": "30 LTR ULTRASONIC CLEANER M.UC.A1012",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KlY-y8TmBsk-vkpRSxb63g5ds0a2N7_L",
    "Product Image1": "./images/0284LU.png"
  },
  {
    "Item Code": "0285LU",
    "Item Name": "60 LTR ULTRASONIC CLEANER M.UC.A1018",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fNZlap4NJ8ZHHeF_p0wcCVN7LDkQFekE",
    "Product Image1": "./images/0285LU.png"
  },
  {
    "Item Code": "0286CB",
    "Item Name": "CLEANING BASKET FOR M.UC.240HD ULTRASONIC",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1s4QK7N0--NbpyhWY2vqN5pLr9c7bT43b",
    "Product Image1": "./images/0286CB.png"
  },
  {
    "Item Code": "0287CB",
    "Item Name": "CLEANING BASKET FOR M.UC.340HD ULTRASONIC",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pU4xa2dKfnogAsLuCWidvvMvXSlOa1_4",
    "Product Image1": "./images/0287CB.png"
  },
  {
    "Item Code": "0288CB",
    "Item Name": "CLEANING BASKET FOR M.UC.360HD ULTRASONIC",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pIgZkS8Ai6v8n1esVGn8FQuIYedCeK7o",
    "Product Image1": "./images/0288CB.png"
  },
  {
    "Item Code": "0289CB",
    "Item Name": "CLEANING BASKET FOR M.UC.410HD ULTRASONIC",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1U6ypHrDikoMhKZG9gtSeuvq6euBRKG5L",
    "Product Image1": "./images/0289CB.png"
  },
  {
    "Item Code": "0290CB",
    "Item Name": "CLEANING BASKET FOR M.UC.615HD ULTRASONIC",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eUjEmuLGTTPlEr6dBn1V_HUmGFOquc5e",
    "Product Image1": "./images/0290CB.png"
  },
  {
    "Item Code": "0291CB",
    "Item Name": "CLEANING BASKET FOR M.UC.230 HD ULTRASONIC",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1K7e0d2FSrCoOify_hDQbI4wbEzTQ3JoV",
    "Product Image1": "./images/0291CB.png"
  },
  {
    "Item Code": "0292VR",
    "Item Name": "VULCANIZER",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WZkCrthNJPUd-AAxu3n47m_huqhIywpC",
    "Product Image1": "./images/0292VR.png"
  },
  {
    "Item Code": "0293VP",
    "Item Name": "8/"/" VIBRATION POLISHING MACHINE",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zZmrR7Ou_s7SBGcr-c2j7tJKEUEN363X",
    "Product Image1": "./images/0293VP.png"
  },
  {
    "Item Code": "0294IV",
    "Item Name": "12 INCH VIBRATION POLISHING MACHINE",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=18JFsUsjb26AD86CCa-t0d6F3gigUUgDN",
    "Product Image1": "./images/0294IV.png"
  },
  {
    "Item Code": "0295GM",
    "Item Name": "GRINDING MACHINE 204 KOREA",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Ho3qLX0pl_7Cz-8kbIvCvmFp0z5NwBel",
    "Product Image1": "./images/0295GM.png"
  },
  {
    "Item Code": "0296GM",
    "Item Name": "GRINDING MACHINE 119",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Wztu4RnDvlwihjxR_vSrg-J6FkwVVPk2",
    "Product Image1": "./images/0296GM.png"
  },
  {
    "Item Code": "0297GM",
    "Item Name": "GRINDING MACHINE 407",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=145eRQADAfCg_wmSwMVvmoZa5VDTFfz26",
    "Product Image1": "./images/0297GM.png"
  },
  {
    "Item Code": "0298HF",
    "Item Name": "HANDLE FOR 407 GRINDING MACHINE",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1d09cpzwDcWAFf_eS0DnfJKo6riZlsVgt",
    "Product Image1": "./images/0298HF.png"
  },
  {
    "Item Code": "0299CG",
    "Item Name": "3.0MM CLAMP FOR 407 GRINDING MACHINE",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Q9W5oPtzG0vtrvl8aIuKTXa2LPt66onD",
    "Product Image1": "./images/0299CG.png"
  },
  {
    "Item Code": "0300CM",
    "Item Name": "CABLE FOR 90/204/119 GRINDING MACHINE",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bP68Vmky3_1duEwK0Bpye13xVv0rOLgm",
    "Product Image1": "./images/0300CM.png"
  },
  {
    "Item Code": "0301CB",
    "Item Name": "CARBON BRUSH",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15A4ep8B65Go4fZ8QRGOds9v7awa-OXuU",
    "Product Image1": "./images/0301CB.png"
  },
  {
    "Item Code": "0302FS",
    "Item Name": "Flex shaft  carbon brush",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Rcu4NAIt4NADfASRtwBQKjf6XLtTm2y-",
    "Product Image1": "./images/0302FS.png"
  },
  {
    "Item Code": "0303SF",
    "Item Name": "SR Flex shaft carbon brush",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=18NCCs-XWvyDBlkNKyjHstlXHAo0iLVF2",
    "Product Image1": "./images/0303SF.png"
  },
  {
    "Item Code": "0304CB",
    "Item Name": "Carbon brush for 204 motor",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ParUZdeNEPaSD58dQc3AnmkWZvShyxup",
    "Product Image1": "./images/0304CB.png"
  },
  {
    "Item Code": "0305CB",
    "Item Name": "Carbon brush for KT-A15 motor",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qkU1h5nXvsxgzYt_3mfl8l2WegjulgT5",
    "Product Image1": "./images/0305CB.png"
  },
  {
    "Item Code": "0306AU",
    "Item Name": "ALUMINIUM US UNIVERSAL RING MEASURE STICK",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eeus3Fg5KNQb47cRDhFQrrViCiALhXEJ",
    "Product Image1": "./images/0306AU.png"
  },
  {
    "Item Code": "0307EP",
    "Item Name": "EAR PUNCH YELLOW",
    "Category": "EAR GUNS & PIERCING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iusahMxbf-qjIWZIDVJ_DRwczx1BcCLg",
    "Product Image1": "./images/0307EP.png"
  },
  {
    "Item Code": "0308EP",
    "Item Name": "EAR PUNCH METAL SILVER COLOR",
    "Category": "EAR GUNS & PIERCING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hlaay_Jja-HG5AADQSEziYeu-OxZDYUH",
    "Product Image1": "./images/0308EP.png"
  },
  {
    "Item Code": "0309EP",
    "Item Name": "EAR PUNCH BLUE SIMPLE",
    "Category": "EAR GUNS & PIERCING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rijyDMHbJiCvm9FvxH-noPgAU7dEwBU0",
    "Product Image1": "./images/0309EP.png"
  },
  {
    "Item Code": "0310ST",
    "Item Name": "3000 S TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JSN1jj-3fdE5ADKmd_vEq16mICA4XJLe",
    "Product Image1": "./images/0310ST.png"
  },
  {
    "Item Code": "0311ST",
    "Item Name": "4000 S TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YPwUm6iuhY7yYAqNAMl5zS77_g9ctOhi",
    "Product Image1": "./images/0311ST.png"
  },
  {
    "Item Code": "0312ST",
    "Item Name": "5000 S TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1USaaZphyrMP4uGHtcOL4PvHcPtd3MCaN",
    "Product Image1": "./images/0312ST.png"
  },
  {
    "Item Code": "0313HT",
    "Item Name": "HONEST TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IB_dldS0sVnMm0Fjh-79NmiM7bR540EA",
    "Product Image1": "./images/0313HT.png"
  },
  {
    "Item Code": "0314TH",
    "Item Name": "230# TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JP6QOTCm6jJmVIBVOJpR5t-Uos9RDe0w",
    "Product Image1": "./images/0314TH.png"
  },
  {
    "Item Code": "0315TH",
    "Item Name": "270# TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UT3nVDlnONYcOAR1vOglskzVejYy91xv",
    "Product Image1": "./images/0315TH.png"
  },
  {
    "Item Code": "0316TH",
    "Item Name": "410# TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=10KYrpsX-ebWdpIZDH6ELNTkJ0Onmpli9",
    "Product Image1": "./images/0316TH.png"
  },
  {
    "Item Code": "0317TQ",
    "Item Name": "TRANSPARENT QUARTZ STIRRING ROD",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1S-7GFb4QoZViUSNH9Tzkkk7yiB9tvMFE",
    "Product Image1": "./images/0317TQ.png"
  },
  {
    "Item Code": "0318WT",
    "Item Name": "WELDING TOURCH OXYGEN",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=16TiQK5e89O2YlzxtzBgSpFYiIuxVY3YP",
    "Product Image1": "./images/0318WT.png"
  },
  {
    "Item Code": "0319CM",
    "Item Name": "CHINA MADE 4/"/" EMERY WHITE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lHz0hgaYE8qTSIlvNWDdryW3y4HN-y4j",
    "Product Image1": "./images/0319CM.png"
  },
  {
    "Item Code": "0320CM",
    "Item Name": "CHINA MADE 5/"/" EMERY WHITE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1buBGUzU1npMPucz5t4lJ9J3WnGLHOoAB",
    "Product Image1": "./images/0320CM.png"
  },
  {
    "Item Code": "0321CM",
    "Item Name": "CHINA MADE 6/"/" EMERY WHITE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qxEsAlp_OwyQRyN-b5o37mmVwtYqFgWa",
    "Product Image1": "./images/0321CM.png"
  },
  {
    "Item Code": "0322PW",
    "Item Name": "6/"/" X 100 PLY WHITE BUFF",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WwWGV73OzH8i0TWaV0l1W6I2AX2XbptU",
    "Product Image1": "./images/0322PW.png"
  },
  {
    "Item Code": "0323PL",
    "Item Name": "6/"/" X 100 PLY LIGHT YELLOW BUFF",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ToWpWJZdXu5jRQa7hRyTPNh4aYPsxkFQ",
    "Product Image1": "./images/0323PL.png"
  },
  {
    "Item Code": "0324PW",
    "Item Name": "6/"/" X 60 PLY WHITE BUFF",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vXaxSN9gpUWm0OUSA3WfSSFnWBQ1WvJF",
    "Product Image1": "./images/0324PW.png"
  },
  {
    "Item Code": "0325PL",
    "Item Name": "6/"/" X 60 PLY LIGHT YELLOW BUFF",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eXoMQqJzdMmTBCOd6g_YHukltgwIvIZW",
    "Product Image1": "./images/0325PL.png"
  },
  {
    "Item Code": "0326PW",
    "Item Name": "5/"/" X 50 PLY WHITE BUFF",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=10n1rjYWHXsyJpNw2I_y8zkuFEOnc59-j",
    "Product Image1": "./images/0326PW.png"
  },
  {
    "Item Code": "0327PL",
    "Item Name": "5/"/" X 50 PLY LIGHT YELLOW BUFF",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dT_-m4nyABBGgEWQZq6p9IYYV0kk4xaO",
    "Product Image1": "./images/0327PL.png"
  },
  {
    "Item Code": "0328PW",
    "Item Name": "2.5/"/" X 60 PLY WHITE BUFF",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1L7YCBa34ce9mJAOLFnbcWZbqBX3gv1dT",
    "Product Image1": "./images/0328PW.png"
  },
  {
    "Item Code": "0329LY",
    "Item Name": "2.5/"/" X 60 LIGHT YELLOW BUFF",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zx3AEgw6TTDkgXa3dfBjUxZlaqpCMc6L",
    "Product Image1": "./images/0329LY.png"
  },
  {
    "Item Code": "0330PW",
    "Item Name": "2.5 /"/" X 50 PLY WHITE BUFF",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rYOZ7vYzdKq6gLNBUMYJAjz_EfbIKLDj",
    "Product Image1": "./images/0330PW.png"
  },
  {
    "Item Code": "0331PL",
    "Item Name": "2.5/"/" X 50 PLY LIGHT YELLOW BUFF",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=12-5zKXFHOUpJPtpjY8uxupeVBjbuRyd8",
    "Product Image1": "./images/0331PL.png"
  },
  {
    "Item Code": "0332BH",
    "Item Name": "BLADE HANDLE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bTz97zxNfBpj-tokBvhaf8lJoLFrviRm",
    "Product Image1": "./images/0332BH.png"
  },
  {
    "Item Code": "0334RB",
    "Item Name": "RED BRUSH 4C",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1coX97FfrUOTOA4L8qOZ5pc8mu49rKDJA",
    "Product Image1": "./images/0334RB.png"
  },
  {
    "Item Code": "0335BB",
    "Item Name": "BLUE BRUSH 4C",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=14MOF_h4vqvetR3tZCeOeG-D7Yop7OF7A",
    "Product Image1": "./images/0335BB.png"
  },
  {
    "Item Code": "0336WH",
    "Item Name": "WOOD HUB BRISTLE BRUSH 2C T.BW.B1022",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1biczOloZGCeUxhGWwPaYh8PW3LYsfSCE",
    "Product Image1": "./images/0336WH.png"
  },
  {
    "Item Code": "0337BB",
    "Item Name": "BRUSH 4C BROAD",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=16JGVv-P2uizpAa7DgCCz92B6OUrDkzTw",
    "Product Image1": "./images/0337BB.png"
  },
  {
    "Item Code": "0338IH",
    "Item Name": "IRON HUB BLACK BRISTLE BRUSH 48MM / 24MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JGwdgVLaI4nfLBSzjAOhKTwt0bM6cCX1",
    "Product Image1": "./images/0338IH.png"
  },
  {
    "Item Code": "0339IH",
    "Item Name": "IRON HUB BRISTLE WHITE BRUSH 48MM / 24MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1l8vlpHiZ-G7BULh5anRz5dCQeTHz6uOi",
    "Product Image1": "./images/0339IH.png"
  },
  {
    "Item Code": "0340MW",
    "Item Name": "80 MM WIRE WHEEL",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1cW0CkCZ-L0nODiXLeUf-s2wMTS38Y_el",
    "Product Image1": "./images/0340MW.png"
  },
  {
    "Item Code": "0341MW",
    "Item Name": "100 MM WIRE WHEEL",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Xy36IbtDORsLKXlgMYPeLHvCVYnBPK9P",
    "Product Image1": "./images/0341MW.png"
  },
  {
    "Item Code": "0342MW",
    "Item Name": "120 MM WIRE WHEEL",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UC2tpdBqMxjYfZwX-aGcHU4_-azqoeOr",
    "Product Image1": "./images/0342MW.png"
  },
  {
    "Item Code": "0343BW",
    "Item Name": "6C BRASS WIRE BRUSH WITH WOOD HANDLE CHINA",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1twk2XkHgnHM0xvVEJHFABDTkTJGEopb4",
    "Product Image1": "./images/0343BW.png"
  },
  {
    "Item Code": "0344BW",
    "Item Name": "BRASS WIRE BRUSH WITH WOOD HANDLE CHINA",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1llEGelpp3BXzoeBBPksZW6S2HibJq24g",
    "Product Image1": "./images/0344BW.png"
  },
  {
    "Item Code": "0345SW",
    "Item Name": "SMALL WIRE WHEEL",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=12ZdoZv04aZQqZkobEN1CU77bnjiuGAcA",
    "Product Image1": "./images/0345SW.png"
  },
  {
    "Item Code": "0346YB",
    "Item Name": "YELLOW BUFF WITH HANDLE",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fZo7L1oM1w7o7DNUySSfL72HS3T08ODE",
    "Product Image1": "./images/0346YB.png"
  },
  {
    "Item Code": "0347WB",
    "Item Name": "WHITE BRUSH WITH HANDLE",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1cTlosfnCVx-FXQSuipZ0wP574ZP6UaEW",
    "Product Image1": "./images/0347WB.png"
  },
  {
    "Item Code": "0348PW",
    "Item Name": "22MM POLISHING WHEEL",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=145Q4Wjw7om83qMPsi3H8CnVsrS-r6BJ9",
    "Product Image1": "./images/0348PW.png"
  },
  {
    "Item Code": "0349BB",
    "Item Name": "BLACK BRISTLE BRUSH STRAIGHT",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LmM7_Hq6bvn54Kfn7aPx5yUW-FTVPU4R",
    "Product Image1": "./images/0349BB.png"
  },
  {
    "Item Code": "0350WB",
    "Item Name": "WHITE BRISTLE BRUSH STRAIGHT",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VgUwvsjMUae41AndLwfeLHUIZQ4Djndu",
    "Product Image1": "./images/0350WB.png"
  },
  {
    "Item Code": "0351BW",
    "Item Name": "BRUSH WITH HANDLE BROWN COLOR 22MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KSYBn3X-Fo3-S1sZSducviwSP3rnpEnq",
    "Product Image1": "./images/0351BW.png"
  },
  {
    "Item Code": "0352BH",
    "Item Name": "BRUSH WITH HANDLE BROWN COLOR 19MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YKI7ziDtr5oXSj-fnmPUsiVtr69R-RkT",
    "Product Image1": "./images/0352BH.png"
  },
  {
    "Item Code": "0353BH",
    "Item Name": "BRUSH WITH HANDLE BLACK & WHITE COLOR 22MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LGsXrNed2fFSAeEZUKiWoI9k9s39un_R",
    "Product Image1": "./images/0353BH.png"
  },
  {
    "Item Code": "0354BH",
    "Item Name": "BRUSH WITH HANDLE BLACK & WHITE COLOR 19MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Gs9dLJ3uHzVVUMfoXc-ET6GI-S0tRMYO",
    "Product Image1": "./images/0354BH.png"
  },
  {
    "Item Code": "0355BH",
    "Item Name": "BRUSH WITH HANDLE BLACK COLOR 22MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Ixl9mwuWivyvl-ULIjpTsMw5Bfrx5EVV",
    "Product Image1": "./images/0355BH.png"
  },
  {
    "Item Code": "0356BH",
    "Item Name": "BRUSH WITH HANDLE BLACK COLOR 19MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vLpDHGpm8N8pg-oY3uaOa5qEplsFqNra",
    "Product Image1": "./images/0356BH.png"
  },
  {
    "Item Code": "0357BH",
    "Item Name": "BRUSH WITH HANDLE WHITE COLOR 22MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IvCkzrbJLwNlDddfaUnHb6tgkQUtf18w",
    "Product Image1": "./images/0357BH.png"
  },
  {
    "Item Code": "0358BH",
    "Item Name": "BRUSH WITH HANDLE WHITE COLOR 19MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1agm7mDnZ2wUqlIW-IY_edCZSCgSaDO9n",
    "Product Image1": "./images/0358BH.png"
  },
  {
    "Item Code": "0359EG",
    "Item Name": "EYE GLASS 10X 21MM",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Uet_RtEsHpWAaR7_Ix_l4JF0faTcCQWi",
    "Product Image1": "./images/0359EG.png"
  },
  {
    "Item Code": "0360EG",
    "Item Name": "EYE GLASS 30X21MM",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YwMD5VeQHMLzTVPLjLiJeXFsoJrpPgBI",
    "Product Image1": "./images/0360EG.png"
  },
  {
    "Item Code": "0361JL",
    "Item Name": "30*21 JEWELRY LOUPE",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1nFhke-95rlqa93BtD_xiSB91Y8PqpSIg",
    "Product Image1": "./images/0361JL.png"
  },
  {
    "Item Code": "0362JL",
    "Item Name": "14*12 JEWELRY LOUPE",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=16u3JloIeEZzsPlNnXJW0bUsoT1JzZlKN",
    "Product Image1": "./images/0362JL.png"
  },
  {
    "Item Code": "0363JL",
    "Item Name": "10*21 JEWELRY LOUPE 7027A",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QkeATMoWMI0SZYeH4WS2INBkc-yezF5O",
    "Product Image1": "./images/0363JL.png"
  },
  {
    "Item Code": "0364JL",
    "Item Name": "10*18 JEWELRY LOUPE 7866",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Um1cLR6zLiMVuZA6mYdQGU48T-978Y4G",
    "Product Image1": "./images/0364JL.png"
  },
  {
    "Item Code": "0365CB",
    "Item Name": "CUTTER BLUE JAPAN 190",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KoPjf2UIqAcdGxHbLOLlTmh1_saY6sfJ",
    "Product Image1": "./images/0365CB.png"
  },
  {
    "Item Code": "0366JP",
    "Item Name": "JAPAN 3 PEAK PILER PNP-150G",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SEpuxoP2_3IYH52YA3moMc57-ETM5BOs",
    "Product Image1": "./images/0366JP.png"
  },
  {
    "Item Code": "0367PP",
    "Item Name": "GN-200J 3 PEAKS PILER",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LyagnLzIn5T57gti61x0s-APbi3Gqw0H",
    "Product Image1": "./images/0367PP.png"
  },
  {
    "Item Code": "0368SP",
    "Item Name": "SHE.K 190 PILER",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1o5ff6-5OjZ5iFGHof-saB7Ngs8Xw_j6U",
    "Product Image1": "./images/0368SP.png"
  },
  {
    "Item Code": "0369SS",
    "Item Name": "ST-22H SANTUS 6/"/" PILER",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1boemkaQjTOO9oVDHg7WZIQOBUrC-6oFX",
    "Product Image1": "./images/0369SS.png"
  },
  {
    "Item Code": "0370SS",
    "Item Name": "ST-23H SANTUS 5/"/" PILER",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qsoUbrPBpA0AOKKGjg2HtfXmMNGx941s",
    "Product Image1": "./images/0370SS.png"
  },
  {
    "Item Code": "0371CH",
    "Item Name": "35 CM HIGH TEMPERATURE GLOVES",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1S2B7btlfymT4Ubt1Ad5foyPzeHfJeJww",
    "Product Image1": "./images/0371CH.png"
  },
  {
    "Item Code": "0372HT",
    "Item Name": "HIGH TEMPERATURE GLOVES",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=17hR3kIjHpqdqlEoHxT046GXabLH__0Xx",
    "Product Image1": "./images/0372HT.png"
  },
  {
    "Item Code": "0373NB",
    "Item Name": "NOTE BOOK 500 GRAM POCKET DIGITAL SCALE",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1AZe7gQL7-Ne4JlV5tdsczwzLsc0mkWOW",
    "Product Image1": "./images/0373NB.png"
  },
  {
    "Item Code": "0374SR",
    "Item Name": "SHANK FOR RUBBER REGULAR",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PxS9rOJFqA8Tn5mLCkrG1_iYIZu5FnX6",
    "Product Image1": "./images/0374SR.png"
  },
  {
    "Item Code": "0375PB",
    "Item Name": "POLISHING BRUSH WITH SHANK 13*H15MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dHUJcCFZUdz84LfU3r4Acl9wtnVfS4X9",
    "Product Image1": "./images/0375PB.png"
  },
  {
    "Item Code": "0376PB",
    "Item Name": "POLISHING BRUSH WITH SHANK 17*H12MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jA03h8nm33pYgcIP5q6qbk2OaXT4feMx",
    "Product Image1": "./images/0376PB.png"
  },
  {
    "Item Code": "0377DF",
    "Item Name": "DIAMOND FULL SET",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UpByy_NPHZHmLyrp4L9kt6C21iax_UbU",
    "Product Image1": "./images/0377DF.png"
  },
  {
    "Item Code": "0378RM",
    "Item Name": "RUBBER 22MM X 3MM MIX",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1NqxyYUxG1FnbMi4r35XsMNu7Ojg8rJfy",
    "Product Image1": "./images/0378RM.png"
  },
  {
    "Item Code": "0379FR",
    "Item Name": "FLASK WITH RANGE WITH HOLE 10 X 22.5 CM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eTUcZpEEu5QVmheUBNYiHnXfIy1f4Mda",
    "Product Image1": "./images/0379FR.png"
  },
  {
    "Item Code": "0380RB",
    "Item Name": "RUBBER BASE 10 CM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1r6DKjZyxLybMBAg3bNwamShlXvMYifs9",
    "Product Image1": "./images/0380RB.png"
  },
  {
    "Item Code": "0381RB",
    "Item Name": "RUBBER BASE 9 CM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hl3xkJezLgf2vEKm2ins06DkRf5ADUoS",
    "Product Image1": "./images/0381RB.png"
  },
  {
    "Item Code": "0382RB",
    "Item Name": "RUBBER BASE 7.5 CM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Uevktnf-1YntwEqrlHO00SdaCcfAs2NR",
    "Product Image1": "./images/0382RB.png"
  },
  {
    "Item Code": "0383DC",
    "Item Name": "DIAMOND CUTTING BLADE 22#",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jj7QU8rSRze9rQHfXT87wj5yYRz4Q6Zc",
    "Product Image1": "./images/0383DC.png"
  },
  {
    "Item Code": "0384DC",
    "Item Name": "DIAMOND CUTTING BLADE 25#",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CLIrh7LCPdIa3xjKD2ew4ubEnCkTYz1_",
    "Product Image1": "./images/0384DC.png"
  },
  {
    "Item Code": "0385DC",
    "Item Name": "DIAMOND CUTTING BLADE 30 #",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14ln4yT5jqpo67joQczHhB5uj65MeIUQY",
    "Product Image1": "./images/0385DC.png"
  },
  {
    "Item Code": "0386SS",
    "Item Name": "SAND FOR SAND BLASTING 100",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gShAliDnviVq-vEnN7ybRyYiO5_6Psry",
    "Product Image1": "./images/0386SS.png"
  },
  {
    "Item Code": "0387SS",
    "Item Name": "SAND FOR SAND BLASTING 100 H.PD.00054",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZH6BWn2QvfVqE9pbUvgkrhLyQakpl4dc",
    "Product Image1": "./images/0387SS.png"
  },
  {
    "Item Code": "0388SS",
    "Item Name": "SAND FOR SAND BLASTING 320",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jXNEE7sVnww_oxmjkrRFwgksEPWYOhkf",
    "Product Image1": "./images/0388SS.png"
  },
  {
    "Item Code": "0389GM",
    "Item Name": "GUAGE MILL",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Wm771XtEIph4BzYwhRYrBqAJ9VdsZ-60",
    "Product Image1": "./images/0389GM.png"
  },
  {
    "Item Code": "0390WD",
    "Item Name": "WIRE DRAWING PLATE 39 HOLES 0.26-4.1",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wlvZq__GgdJe6D7WO0lG4rUF7lUPcOat",
    "Product Image1": "./images/0390WD.png"
  },
  {
    "Item Code": "0391WD",
    "Item Name": "WIRE DRAWING PLATE 52 HOLES",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14Nh8GjM5c3sssDr-HIh_3xpMgUsHaodh",
    "Product Image1": "./images/0391WD.png"
  },
  {
    "Item Code": "0392CM",
    "Item Name": "CUTTER MJL-5C COPY TYPE",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aErFt2-bNCGjTL5k3nzfIdlRlqJzLWpn",
    "Product Image1": "./images/0392CM.png"
  },
  {
    "Item Code": "0393CM",
    "Item Name": "CUTTER MTC-5 ORIGINAL",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IB7_ZNGj98YwIgDIDjl9bxAAOtaAXTQh",
    "Product Image1": "./images/0393CM.png"
  },
  {
    "Item Code": "0394CP",
    "Item Name": "CUTTER 3 PEAKS PNP.150G-S",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1El5a-a61JaZC68KFQmRQbI9lNoGLI8hy",
    "Product Image1": "./images/0394CP.png"
  },
  {
    "Item Code": "0395CP",
    "Item Name": "CUTTER 3 PEAKS PNP.125G-S",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fOuSLtEpPScnCUxMknqhd3MUhaiaXuIg",
    "Product Image1": "./images/0395CP.png"
  },
  {
    "Item Code": "0396CP",
    "Item Name": "CUTTER 3 PEAKS PNP.150G-S ORIGINAL",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1EeZ9YdjOdsO_3g1qTB03Gt4up4PiQz1a",
    "Product Image1": "./images/0396CP.png"
  },
  {
    "Item Code": "0397CP",
    "Item Name": "CUTTER 3 PEAKS PNP . 125G-S ORIGINAL",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1J9NYiZk1F4Ow3k7BE8kcbGdncm_BT6nn",
    "Product Image1": "./images/0397CP.png"
  },
  {
    "Item Code": "0398SC",
    "Item Name": "SHARP CUTTER",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YZq338C8MycCBBPp8lputwl-4OI_xAkB",
    "Product Image1": "./images/0398SC.png"
  },
  {
    "Item Code": "0399RC",
    "Item Name": "ROUND CUTTER",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IKv9yVAPYxgdxziOkyYsYKAtoczwJoz9",
    "Product Image1": "./images/0399RC.png"
  },
  {
    "Item Code": "0400FC",
    "Item Name": "FLAT CUTTER",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1cKsi8txv6yABn_1tKatTt3bh5Wz2HsFR",
    "Product Image1": "./images/0400FC.png"
  },
  {
    "Item Code": "0401PM",
    "Item Name": "POLISHING MOTOR BLACK M.MT.DM007",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RTYruindluUyldoMh3M6WFqZQrTRCPgv",
    "Product Image1": "./images/0401PM.png"
  },
  {
    "Item Code": "0402SB",
    "Item Name": "SANDING BLASTER PS-7",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1m08Rw24JY7EI8g4jPC8qyqUG234gJ31J",
    "Product Image1": "./images/0402SB.png"
  },
  {
    "Item Code": "0403SB",
    "Item Name": "SANDING BLASTER PS-SA",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1m_q2KzWaikKX4OBH6fbPu2SmkiVnyNde",
    "Product Image1": "./images/0403SB.png"
  },
  {
    "Item Code": "0404PB",
    "Item Name": "POLISHING BENCH DM-6",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1taYmMloSg3nUETG5Bk0Vp8imGABu7w9U",
    "Product Image1": "./images/0404PB.png"
  },
  {
    "Item Code": "0405PB",
    "Item Name": "POLISHING BENCH DM-2",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1S0PZFPKPEcSlHV9qGCFWdBOQoMvm6S7W",
    "Product Image1": "./images/0405PB.png"
  },
  {
    "Item Code": "0406YC",
    "Item Name": "YAMATO CUTTER",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lqrIwnUtoKruObzFXNXS-8S89KRu8QrK",
    "Product Image1": "./images/0406YC.png"
  },
  {
    "Item Code": "0407GP",
    "Item Name": "300 GRAM POCKET DIGITAL SCALE DM.3",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wAWQTAdFrm2rjRViGnG4RTsJUyhC8ml6",
    "Product Image1": "./images/0407GP.png"
  },
  {
    "Item Code": "0408GP",
    "Item Name": "500 GRAM POCKET DIGITAL SCALE DM3",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bdORKAvh16YZ6-6smr0eE_oXDliAC6hk",
    "Product Image1": "./images/0408GP.png"
  },
  {
    "Item Code": "0409BM",
    "Item Name": "1C BRUSH MIDDLE",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qWUYt5XrRN6M84UfTxVZrgsV1xCIfNxc",
    "Product Image1": "./images/0409BM.png"
  },
  {
    "Item Code": "0410BM",
    "Item Name": "2C BRUSH MIDDLE",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=14FqiS9IK3A8_j2TUJ7X7MYl1kRvgV7IY",
    "Product Image1": "./images/0410BM.png"
  },
  {
    "Item Code": "0411BC",
    "Item Name": "1C BRUSH CHEAPER",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mEFJ25w235-Bt_aL74J6VzWf4UdEIP5I",
    "Product Image1": "./images/0411BC.png"
  },
  {
    "Item Code": "0412BC",
    "Item Name": "2C BRUSH CHEAPER",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1K1mKOoPiD5RvMEj9rZTSJgXQ2KLGlO03",
    "Product Image1": "./images/0412BC.png"
  },
  {
    "Item Code": "0413BH",
    "Item Name": "BRUSH WITHOUT HANDLE BROWN COLOR 22MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pNWYunEnfGc7_ZgK2CukDC68j_f3J_6l",
    "Product Image1": "./images/0413BH.png"
  },
  {
    "Item Code": "0414BH",
    "Item Name": "BRUSH WITHOUT HANDLE BROWN COLOR 19MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=185Jc1K0zIlbgPxZz_YgDO22vicyJMOb_",
    "Product Image1": "./images/0414BH.png"
  },
  {
    "Item Code": "0415BH",
    "Item Name": "BRUSH WITHOUT HANDLE BLACK & WHITE COLOR 22MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BUPDUZ7flBqJOoRIDA0Rd_PjH5G2LF37",
    "Product Image1": "./images/0415BH.png"
  },
  {
    "Item Code": "0416BH",
    "Item Name": "BRUSH WITHOUT HANDLE BLACK & WHITE COLOR 19MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1OGXNOJI4hajh1Y8XFKo6XiJ1ptlunvJG",
    "Product Image1": "./images/0416BH.png"
  },
  {
    "Item Code": "0417BH",
    "Item Name": "BRUSH WITHOUT HANDLE BLACK COLOR 22MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1N7swK4z9dnFtP02dYL25LfwRQmh4M9uI",
    "Product Image1": "./images/0417BH.png"
  },
  {
    "Item Code": "0418BH",
    "Item Name": "BRUSH WITHOUT HANDLE BLACK COLOR 19MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uZQfnBs1_FtGnXOkDW6TkdBH6Ry0m_Xk",
    "Product Image1": "./images/0418BH.png"
  },
  {
    "Item Code": "0419BH",
    "Item Name": "BRUSH WITHOUT HANDLE WHITE COLOR 22MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xcRGoATLwog02OE4dB7PJMGw49TIGYyf",
    "Product Image1": "./images/0419BH.png"
  },
  {
    "Item Code": "0420BH",
    "Item Name": "BRUSH WITHOUT HANDLE WHITE COLOR 19MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1K7os-Q34aM4dnqIwP-eFg-5ff6Eb8iLI",
    "Product Image1": "./images/0420BH.png"
  },
  {
    "Item Code": "0421SS",
    "Item Name": "S-255L-20 STONE BOX LONG",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1EkuRz9S_OAlb2x518MNcFN2vndklLj4U",
    "Product Image1": "./images/0421SS.png"
  },
  {
    "Item Code": "0422SS",
    "Item Name": "S-255L-10 STONE BOX MEDIUM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iobTTTKFGPdEfizHjSYw72MBmpAsZ8Ab",
    "Product Image1": "./images/0422SS.png"
  },
  {
    "Item Code": "0423SS",
    "Item Name": "S-255L-5 STONE BOX SMALL",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1c-w4XoJEcPE3k4E9GJX8N7SeGGPNDskC",
    "Product Image1": "./images/0423SS.png"
  },
  {
    "Item Code": "0424SS",
    "Item Name": "S-255L-4 STONE BOX V SMALL",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1X8j4oShT-tfagst2jd70jABx6xqD_pXQ",
    "Product Image1": "./images/0424SS.png"
  },
  {
    "Item Code": "0425SS",
    "Item Name": "S-255L-3 STONE BOX V SMALL",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1efgtDRTyUNW5BIZroEnSpkqLnFRjD3aN",
    "Product Image1": "./images/0425SS.png"
  },
  {
    "Item Code": "0426SS",
    "Item Name": "S-849 STONE TRAY",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uA3ghb7X46g4glT9ORoPrbf4AYzxvwaU",
    "Product Image1": "./images/0426SS.png"
  },
  {
    "Item Code": "0427SB",
    "Item Name": "STONE BOX FLAP TYPE",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hAK2EA-CnLWlf__hIw-c_sfTTJcSOXzC",
    "Product Image1": "./images/0427SB.png"
  },
  {
    "Item Code": "0428SB",
    "Item Name": "S-255-7 STONE BOX",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=12CjYelaq0cO9_g800pmvZxqPVrA3oSpc",
    "Product Image1": "./images/0428SB.png"
  },
  {
    "Item Code": "0429SB",
    "Item Name": "STONE BOX GOLDEN LOCK SMALL",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kreUWGL6yj7kT3FK-VnGrqhNtQ6mtMVY",
    "Product Image1": "./images/0429SB.png"
  },
  {
    "Item Code": "0430SB",
    "Item Name": "STONE BOX GOLDEN LOCK MEDIUM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=103LNANMp9fz0g-WE6CXc054JOLEza-w1",
    "Product Image1": "./images/0430SB.png"
  },
  {
    "Item Code": "0431SB",
    "Item Name": "STONE BOX GOLDEN LOCK BIG",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uIO4WHheaPdnosIpH_PH0OiTHX31-BGl",
    "Product Image1": "./images/0431SB.png"
  },
  {
    "Item Code": "0432SB",
    "Item Name": "STONE BOX GOLDEN LOCK LARGE",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1suRPsAO5Z3FG44mf0giXnlpqZXosP50J",
    "Product Image1": "./images/0432SB.png"
  },
  {
    "Item Code": "0433RM",
    "Item Name": "ROTEX MOTOR",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=112mEyiCvR8__u1Pqgxp39q9498J_fztY",
    "Product Image1": "./images/0433RM.png"
  },
  {
    "Item Code": "0434SB",
    "Item Name": "STONE BOX METAL SMALL",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1W-XCMpCxF8vLKDXjAbjlE58osX_w6Qh5",
    "Product Image1": "./images/0434SB.png"
  },
  {
    "Item Code": "0435SB",
    "Item Name": "STONE BOX METAL MEDIUM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1J30lLCMviWcItCiia4pcT2q_1JMvgigB",
    "Product Image1": "./images/0435SB.png"
  },
  {
    "Item Code": "0436SB",
    "Item Name": "STONE BOX METAL BIG",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QYSehuY1JuxCrPi1tTW0owg1XJUoiYFO",
    "Product Image1": "./images/0436SB.png"
  },
  {
    "Item Code": "0437SB",
    "Item Name": "STONE BOX METAL LONG",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1glus_34edTm-coULA-ah_1oGze6-8eZR",
    "Product Image1": "./images/0437SB.png"
  },
  {
    "Item Code": "0438DP",
    "Item Name": "DIAMOND PARCEL BOX DOUBLE DOOR",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iaKys2NOzt5f9_Ih_eQm-KrGQVOFKGne",
    "Product Image1": "./images/0438DP.png"
  },
  {
    "Item Code": "0439RS",
    "Item Name": "RING SIZER A-2",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Xz26SqedIuBEPz7zfEXp-4bfegeNFSjl",
    "Product Image1": "./images/0439RS.png"
  },
  {
    "Item Code": "0440RS",
    "Item Name": "RING STICK WOODEN A-2",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jc3GdGaVISR93eEyepAm2PaolUArCSZQ",
    "Product Image1": "./images/0440RS.png"
  },
  {
    "Item Code": "0441RS",
    "Item Name": "RING STICK INDIA",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1T7myrMIqFLkoVLBGpCoGoeyFRhoxprjh",
    "Product Image1": "./images/0441RS.png"
  },
  {
    "Item Code": "0442RS",
    "Item Name": "RING STICK PLASTIC",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Wtm3iHO8b33LcNGQq2IzWxFGLgAqlUOM",
    "Product Image1": "./images/0442RS.png"
  },
  {
    "Item Code": "0443SS",
    "Item Name": "SHARK SKIN TAG",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kwmneXjnLglvqCKJ5IK2roBahLmdHfMg",
    "Product Image1": "./images/0443SS.png"
  },
  {
    "Item Code": "0444BD",
    "Item Name": "BLUE DABBI",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_vUJ9EcknWLmzkDreOkvxRSUui0EWnZQ",
    "Product Image1": "./images/0444BD.png"
  },
  {
    "Item Code": "0445TT",
    "Item Name": "TURN TABLE BIG",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-rZwajTURjJ9r7xmI0D6tbYAM4ovpcFW",
    "Product Image1": "./images/0445TT.png"
  },
  {
    "Item Code": "0446TT",
    "Item Name": "TURN TABLE SMALL",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LyQignvTXMbNxSlkPFF5dAWo4VmgC-Kb",
    "Product Image1": "./images/0446TT.png"
  },
  {
    "Item Code": "0447TT",
    "Item Name": "TRIPORT",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dGLlr8db1eytohBTayIrqRZSIcRNS765",
    "Product Image1": "./images/0447TT.png"
  },
  {
    "Item Code": "0448FL",
    "Item Name": "FLAP LAMP BLACK FOLDING",
    "Category": "TABEL LAMPS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wy9iLhkm5Vb5S-8qOdxDewJcBFftesyB",
    "Product Image1": "./images/0448FL.png"
  },
  {
    "Item Code": "0449DP",
    "Item Name": "DIAMOND PARCEL PAPER INDIA",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1oE4nZj1DcsKXeU2LqUbFBwDhSjLQB1nk",
    "Product Image1": "./images/0449DP.png"
  },
  {
    "Item Code": "0450DP",
    "Item Name": "DIAMOND PARCEL PAPER 35",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Izrxhfc9K5Tp4SX73Hika8NZZqn44j9v",
    "Product Image1": "./images/0450DP.png"
  },
  {
    "Item Code": "0451DP",
    "Item Name": "DIAMOND PARCEL PAPER 60",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZoWOiArEFc_XESSUX7GLBneVYvrovsfD",
    "Product Image1": "./images/0451DP.png"
  },
  {
    "Item Code": "0452RP",
    "Item Name": "R/SONS PARCEL PAPER",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vbqBUAJM9PiAjSWpzNZugHxC_KXjG00-",
    "Product Image1": "./images/0452RP.png"
  },
  {
    "Item Code": "0453HG",
    "Item Name": "HAND GLOVES",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1c_gEmdDHLEkpBMZTp1fWSOhNVZp1aicG",
    "Product Image1": "./images/0453HG.png"
  },
  {
    "Item Code": "0454SB",
    "Item Name": "STONE BOX BIG LONG 3X3 W. GLASS",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TNccFxNsB6eTGJcUf1nGd4ZSOBTTKhIL",
    "Product Image1": "./images/0454SB.png"
  },
  {
    "Item Code": "0455SB",
    "Item Name": "STONE BOX NO-1",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rsEIryIErWPThBLVPGxUVK7F645yBwao",
    "Product Image1": "./images/0455SB.png"
  },
  {
    "Item Code": "0456SB",
    "Item Name": "STONE BOX NO-2",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Gk4_iq7gjg_dLtLGnkPLVx_3L-sNCdDP",
    "Product Image1": "./images/0456SB.png"
  },
  {
    "Item Code": "0457SB",
    "Item Name": "STONE BOX NO-3",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Kae5UtLel-Wis_Z34g09yYUroSIyQ6QL",
    "Product Image1": "./images/0457SB.png"
  },
  {
    "Item Code": "0458SB",
    "Item Name": "STONE BOX NO-4",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HoX2QXlFcge3knNyl5aB6VBy4OTn2lU1",
    "Product Image1": "./images/0458SB.png"
  },
  {
    "Item Code": "0459SB",
    "Item Name": "STONE BOX NO-5",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1cc91lHAFvgByHD2PSnsLcjwF_7Lv2oez",
    "Product Image1": "./images/0459SB.png"
  },
  {
    "Item Code": "0460SB",
    "Item Name": "STONE BOX NO-6",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fn-znSkzt3FiwFKFOAuokPSHUa0JibU3",
    "Product Image1": "./images/0460SB.png"
  },
  {
    "Item Code": "0461SB",
    "Item Name": "STONE BOX NO-7",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1AdpbCksGX9xxN9Wxov-C4SROYXscg8nC",
    "Product Image1": "./images/0461SB.png"
  },
  {
    "Item Code": "0462SB",
    "Item Name": "STONE BOX NO-8",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eEHE5LN75H-ahOyhOQVeyL4dOtfO7cHY",
    "Product Image1": "./images/0462SB.png"
  },
  {
    "Item Code": "0463SB",
    "Item Name": "STONE BOX 6X6",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=10NyqQ14VRI_ZQpdfeOHPA2aGIDeVss2J",
    "Product Image1": "./images/0463SB.png"
  },
  {
    "Item Code": "0464SB",
    "Item Name": "STONE BOX 4X4",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=11CZvyBt8m-9zClztPiHvOyLwAR0nMGlX",
    "Product Image1": "./images/0464SB.png"
  },
  {
    "Item Code": "0465SB",
    "Item Name": "STONE BOX SLIDE DOOR BK /",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=11eYNbAB1VzebSA_4HU0yurypmR5RiPEJ",
    "Product Image1": "./images/0465SB.png"
  },
  {
    "Item Code": "0466SS",
    "Item Name": "SIVES STAND OVAL",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_a3BsCapYoPD8CLmwallAJHdg5CT9GuO",
    "Product Image1": "./images/0466SS.png"
  },
  {
    "Item Code": "0467RC",
    "Item Name": "RING CLIP",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1w04XBf--f43w6wBdU2yAlZYYFuJtXFYo",
    "Product Image1": "./images/0467RC.png"
  },
  {
    "Item Code": "0468RT",
    "Item Name": "2ND RING TRAY",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pVLIK0KFco_EV7wWgCwf_BMxB5dO_0yn",
    "Product Image1": "./images/0468RT.png"
  },
  {
    "Item Code": "0469SB",
    "Item Name": "STONE BOX 3X3",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=134Guw7PX8ZY60EsvkkG3xddy8jKv3oE9",
    "Product Image1": "./images/0469SB.png"
  },
  {
    "Item Code": "0470SB",
    "Item Name": "STONE BOX 5X5",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eT6V4mpB88JJPfN-2One_Wy5-XAIND2A",
    "Product Image1": "./images/0470SB.png"
  },
  {
    "Item Code": "0471SB",
    "Item Name": "STONE BOX 4X6",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1EyNEJz3MtZ8bKrTVNcjSWvkkuxOYfkex",
    "Product Image1": "./images/0471SB.png"
  },
  {
    "Item Code": "0472SB",
    "Item Name": "STONE BOX 6X6 (20 PCS)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=12GkI7rPdPHESZLSJ3JoC-Whuuiu9gbQA",
    "Product Image1": "./images/0472SB.png"
  },
  {
    "Item Code": "0473SB",
    "Item Name": "STONE BOX 9X9",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1v9t4a59g_i7NAyMaki0RnMmiqVnDcds5",
    "Product Image1": "./images/0473SB.png"
  },
  {
    "Item Code": "0474SB",
    "Item Name": "STONE BOX 6X6 (12 PCS)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1C9sFX4gFB2_c027-PGTcT7a0MLPz-6SY",
    "Product Image1": "./images/0474SB.png"
  },
  {
    "Item Code": "0475EG",
    "Item Name": "EYE GLASS INDIA FOLDING",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Ap0Pigiic638zc6PUkOVq4UHkHni55tN",
    "Product Image1": "./images/0475EG.png"
  },
  {
    "Item Code": "0476CP",
    "Item Name": "COTTON PIN BUFF SET",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Vmmq8gKK1Bjra0WyN_jTUfz1qf1IwySh",
    "Product Image1": "./images/0476CP.png"
  },
  {
    "Item Code": "0477CR",
    "Item Name": "CARBIDE ROTARY FILE",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dZn1oxiHWULlXmA26WgHXARRB9DS577Q",
    "Product Image1": "./images/0477CR.png"
  },
  {
    "Item Code": "0478CC",
    "Item Name": "4 C CHART",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aQ_FXvO36x0IlDcodfChKrWZI0aSA7mI",
    "Product Image1": "./images/0478CC.png"
  },
  {
    "Item Code": "0479SB",
    "Item Name": "STONE BOX 6X6 WITH GLASS COVER",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1z5DCASx1IURTvGrlGd3081McQobPFZfU",
    "Product Image1": "./images/0479SB.png"
  },
  {
    "Item Code": "0480SB",
    "Item Name": "STONE BOX 5X5 WITH GLASS COVER",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TSPR28WxJKhXxB7t-7VDnwctdbAw9nID",
    "Product Image1": "./images/0480SB.png"
  },
  {
    "Item Code": "0481SB",
    "Item Name": "STONE BOX 4X4 WITH GLASS COVER",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rUvHxtcU-P6-Y6_lYd07ezhIgY5Vg9ca",
    "Product Image1": "./images/0481SB.png"
  },
  {
    "Item Code": "0482SB",
    "Item Name": "STONE BOX 3X3 WITH GLASS COVER",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pxbuEvyGUXw2NQRRO9dLswepA3NTG4FT",
    "Product Image1": "./images/0482SB.png"
  },
  {
    "Item Code": "0483ST",
    "Item Name": "STUDEX TOPS ALL MIX",
    "Category": "EAR GUNS & PIERCING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LEpGQlwhrnTFJy-OJGpaaa8VpypzKkLH",
    "Product Image1": "./images/0483ST.png"
  },
  {
    "Item Code": "0484SB",
    "Item Name": "STONE BOX TRANSPRENT LONG",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1O8VgD18ZH_esGAA7WFoBk6svamOj5xsf",
    "Product Image1": "./images/0484SB.png"
  },
  {
    "Item Code": "0485PT",
    "Item Name": "PAPER TAG THREAD",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UAdEw5z_zZtaIwpVJNAb69WMwge6abOw",
    "Product Image1": "./images/0485PT.png"
  },
  {
    "Item Code": "0486PT",
    "Item Name": "PLASTIC TAG ROLE ALL MIX",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pTyG5AlBCWjYNqou_oxXu3agFZT7QKg1",
    "Product Image1": "./images/0486PT.png"
  },
  {
    "Item Code": "0487ZL",
    "Item Name": "ZIP LOCK BAG (4X6)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yJpWHqqyOL9gFpIseFmz5aEXBj0AMuLT",
    "Product Image1": "./images/0487ZL.png"
  },
  {
    "Item Code": "0488ZL",
    "Item Name": "ZIP LOCK BAG (5X7)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mcOvqLTC-bUGg7tOflnpS88E52G6ghWm",
    "Product Image1": "./images/0488ZL.png"
  },
  {
    "Item Code": "0489ZL",
    "Item Name": "ZIP LOCK BAG (6X8)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wdKU3Mx5bPAYYU0l5wEzBwPKLS8DUv0m",
    "Product Image1": "./images/0489ZL.png"
  },
  {
    "Item Code": "0490ZL",
    "Item Name": "ZIP LOCK BAG (7X9)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aUJjNRybnk5mhSuAQZLDn344a09Ygr8g",
    "Product Image1": "./images/0490ZL.png"
  },
  {
    "Item Code": "0491ZL",
    "Item Name": "ZIP LOCK BAG (8X10)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vNtc2u-qI5ChO3jxSc7cYafQvMsmDFhJ",
    "Product Image1": "./images/0491ZL.png"
  },
  {
    "Item Code": "0492ZL",
    "Item Name": "ZIP LOCK BAG (9X11)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1swFsxaTDSONOyuwpi-XzZYuVIfvBfX-n",
    "Product Image1": "./images/0492ZL.png"
  },
  {
    "Item Code": "0493ZL",
    "Item Name": "ZIP LOCK BAG (10X12)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ppHxB04A4H3JEPdfGYNmmzp3uJgwRano",
    "Product Image1": "./images/0493ZL.png"
  },
  {
    "Item Code": "0494ZL",
    "Item Name": "ZIP LOCK BAG (12X15)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1W5L-MPeg_4GmUeARr48HtaOioCZejJ8n",
    "Product Image1": "./images/0494ZL.png"
  },
  {
    "Item Code": "0495ZL",
    "Item Name": "ZIP LOCK BAG (13X17)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1G1TgL5OfXT0lYg0UYMmJ3rVg_htNcVGi",
    "Product Image1": "./images/0495ZL.png"
  },
  {
    "Item Code": "0496ZL",
    "Item Name": "ZIP LOCK BAG (15X20)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1racEtI9yGHzQoAnBpeIxWrf5hl2j5JK1",
    "Product Image1": "./images/0496ZL.png"
  },
  {
    "Item Code": "0497ZL",
    "Item Name": "ZIP LOCK BAG (18X23)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1djezHk4rolR1EIT5OTbVWA4kSo5RsRtk",
    "Product Image1": "./images/0497ZL.png"
  },
  {
    "Item Code": "0498ZL",
    "Item Name": "ZIP LOCK BAG (20X25)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wW3sqbYOcHMBvFOPaLxfCALFXQ5_sP84",
    "Product Image1": "./images/0498ZL.png"
  },
  {
    "Item Code": "0499ZL",
    "Item Name": "ZIP LOCK BAG (22X27)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WSeTqq0iRiEDHWdoqJU6l-7hLJYCw3Nj",
    "Product Image1": "./images/0499ZL.png"
  },
  {
    "Item Code": "0500ZL",
    "Item Name": "ZIP LOCK BAG (23X28)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1NOROOEi0K9fItp9MTIT9noqT_G6QGhCt",
    "Product Image1": "./images/0500ZL.png"
  },
  {
    "Item Code": "0501ZL",
    "Item Name": "ZIP LOCK BAG (25X30)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1acjLhYYc7FEys2vodE1CvhQobytBgDPa",
    "Product Image1": "./images/0501ZL.png"
  },
  {
    "Item Code": "0502ZL",
    "Item Name": "ZIP LOCK BAG (28X33)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Q6OlALo24fBwCBPDyixQJHCMaX4re730",
    "Product Image1": "./images/0502ZL.png"
  },
  {
    "Item Code": "0503ZL",
    "Item Name": "ZIP LOCK BAG (30X35)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=11Kxe82BXaSKa_mrFhT9cJJRlykUjOywv",
    "Product Image1": "./images/0503ZL.png"
  },
  {
    "Item Code": "0504ZL",
    "Item Name": "ZIP LOCK BAG (35X40)",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1d_G76sYbwzyRotWJ_fgfQxg32dobo4Zd",
    "Product Image1": "./images/0504ZL.png"
  },
  {
    "Item Code": "0505ZL",
    "Item Name": "ZIP LOCK BAG (33X38) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UB7_zex78pnMzn4v9UmQFNgeM6VqY2tB",
    "Product Image1": "./images/0505ZL.png"
  },
  {
    "Item Code": "0506SB",
    "Item Name": "SEALING BAG (4X6+3) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=120PWQotOUW4YbpSWsr4CMO_iFQCemXrS",
    "Product Image1": "./images/0506SB.png"
  },
  {
    "Item Code": "0507SB",
    "Item Name": "SEALING BAG (5X7) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sQxylzf7aWLhGQf23C4TQlo0qcyE49yb",
    "Product Image1": "./images/0507SB.png"
  },
  {
    "Item Code": "0508SB",
    "Item Name": "SEALING BAG (6X8) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QqxO_5h7o67usiXqQum48bb9_hGaIdDY",
    "Product Image1": "./images/0508SB.png"
  },
  {
    "Item Code": "0509SB",
    "Item Name": "SEALING BAG (7X9) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=125VfsvEdiDp1J6tYZrb-mhiMhapnbj6W",
    "Product Image1": "./images/0509SB.png"
  },
  {
    "Item Code": "0510SB",
    "Item Name": "SEALING BAG (8X10) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LXRj9E0tnW-wSWkQ0FW49SCbqMtP8gl4",
    "Product Image1": "./images/0510SB.png"
  },
  {
    "Item Code": "0511SB",
    "Item Name": "SEALING BAG (9X11) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Exj5yOjA2WL1O0VIgyWGREgBmKQypXVx",
    "Product Image1": "./images/0511SB.png"
  },
  {
    "Item Code": "0512SB",
    "Item Name": "SEALING BAG (10X12) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=16Nw4j6ymPQoxrB1MQAaxjsvhevCgYPNW",
    "Product Image1": "./images/0512SB.png"
  },
  {
    "Item Code": "0513SB",
    "Item Name": "SEALING BAG (12X15) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ka2sMAD0zWcGrYDCUOtN2AkPcDiVoTMe",
    "Product Image1": "./images/0513SB.png"
  },
  {
    "Item Code": "0514SB",
    "Item Name": "SEALING BAG (13X17) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kOuinxqaisk-z_dnGZi0CiHvUF-ToSP7",
    "Product Image1": "./images/0514SB.png"
  },
  {
    "Item Code": "0515SB",
    "Item Name": "SEALING BAG (15X20+3) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=12AFGtcsNvk3ZQqg75uXHFTo4GzBKKh7H",
    "Product Image1": "./images/0515SB.png"
  },
  {
    "Item Code": "0516SB",
    "Item Name": "SEALING BAG (18X23) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1l0JMRe39fGntWRbzYXx39uUeQrRKlZxK",
    "Product Image1": "./images/0516SB.png"
  },
  {
    "Item Code": "0517SB",
    "Item Name": "SEALING BAG (20X25) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kpWUVWS-7LdnUiTLrgoKmi7kADHsWwKX",
    "Product Image1": "./images/0517SB.png"
  },
  {
    "Item Code": "0518SB",
    "Item Name": "SEALING BAG (25X30) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lbSskST-zJwBe6tDlSDKIlaf8TZruDH-",
    "Product Image1": "./images/0518SB.png"
  },
  {
    "Item Code": "0519SB",
    "Item Name": "SEALING BAG (2.5X5+3) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VrbKoa1nyExuByc6rspIoUf4uAXyexsf",
    "Product Image1": "./images/0519SB.png"
  },
  {
    "Item Code": "0520SB",
    "Item Name": "ZIP LOCK BAG (28X30) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mdg5GC49rHto_xNHgY18vLSwwjRh3Kqk",
    "Product Image1": "./images/0520SB.png"
  },
  {
    "Item Code": "0521SB",
    "Item Name": "SEALING BAG (3X23+3) CM",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ha_0LupjBerpofEJRJ5s3uCzWZEAzxZB",
    "Product Image1": "./images/0521SB.png"
  },
  {
    "Item Code": "0522SB",
    "Item Name": "STONE BOX-255L-7",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ugpKND_e31emFc0udjhtSUP9vNgDCR_g",
    "Product Image1": "./images/0522SB.png"
  },
  {
    "Item Code": "0523SB",
    "Item Name": "SWARAJ 2942 BURNER",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qhX6ONHi9YMzdS_yAeqh0bgJbHxxMs-r",
    "Product Image1": "./images/0523SB.png"
  },
  {
    "Item Code": "0524SB",
    "Item Name": "SWARAJ 2943 BURNER",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1k5LkCBOCQcLtwUYvTzJVVCOtgpDluqwZ",
    "Product Image1": "./images/0524SB.png"
  },
  {
    "Item Code": "0525SB",
    "Item Name": "SWARAJ 3939 BURNER",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1z4J2u8hdQ7WUMX6016ghGl_H5a65Dl7m",
    "Product Image1": "./images/0525SB.png"
  },
  {
    "Item Code": "0526SB",
    "Item Name": "SWARAJ 3940 BURNER",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SZsY9IKyU6fr7nABEK4eFUJz6c8x3P04",
    "Product Image1": "./images/0526SB.png"
  },
  {
    "Item Code": "0527PR",
    "Item Name": "PINVICE RUNNING",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ftX265sKMN3ybTi9uOvrXNXwp_wK5z3r",
    "Product Image1": "./images/0527PR.png"
  },
  {
    "Item Code": "0528SN",
    "Item Name": "SWARAJ NOZZLE HEATING TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=148Gf52lWG00L2w_eQ3XMnMA7fTMjD7HZ",
    "Product Image1": "./images/0528SN.png"
  },
  {
    "Item Code": "0529SN",
    "Item Name": "SWARAJ NOZZLE LONG TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BbH7IM9MeKaq3G88o9nD0VH19sVvYFdX",
    "Product Image1": "./images/0529SN.png"
  },
  {
    "Item Code": "0530AC",
    "Item Name": "AJANTA CLEEP RULLERS 15CM",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hk4XwWE7TAYz7usUdk7H7GZssVegh6Tp",
    "Product Image1": "./images/0530AC.png"
  },
  {
    "Item Code": "0531AB",
    "Item Name": "AJANTA BANGLE GAUGE",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QvXk_Idn89W0OsDgtNv9MFe63izxVao9",
    "Product Image1": "./images/0531AB.png"
  },
  {
    "Item Code": "0532PI",
    "Item Name": "PENTA 5 IN 1 ONLINE TORCH",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vEvPZQfUhw7HIYFxm0g4XVkLJKYkT7vq",
    "Product Image1": "./images/0532PI.png"
  },
  {
    "Item Code": "0533CS",
    "Item Name": "CEMENT SHEET ( ROUND )",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=16rrICHqVcmTj2bGumAF7-0vTQGhfko8N",
    "Product Image1": "./images/0533CS.png"
  },
  {
    "Item Code": "0534EL",
    "Item Name": "EYE LOUPE 18MM ROUND",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TBT7mF9WZW8Ea7bE4I6YiPLSpIGZcOol",
    "Product Image1": "./images/0534EL.png"
  },
  {
    "Item Code": "0535EL",
    "Item Name": "EYE LOUPE 18MM HEX",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eivVPg2sOX4krp2OAOEqYWAJkH6Q22Lo",
    "Product Image1": "./images/0535EL.png"
  },
  {
    "Item Code": "0536EL",
    "Item Name": "EYE LOUPE 21MM ROUND",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1luiX4l6KWoP7MlWYLeZFOKo6O1O-VsqA",
    "Product Image1": "./images/0536EL.png"
  },
  {
    "Item Code": "0537EL",
    "Item Name": "EYE LOUPE 21MM HEX",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1j-8Gv9gMcCjR1coShQkFUX1QZCl06d23",
    "Product Image1": "./images/0537EL.png"
  },
  {
    "Item Code": "0538SS",
    "Item Name": "STANDARD SPARE WING SCREW AND NUT",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15c3smruw84NEdTKSGFgoMf6bHu3nos7P",
    "Product Image1": "./images/0538SS.png"
  },
  {
    "Item Code": "0539LS",
    "Item Name": "LBN SUPER HEAVY CUTTER – DARK GREEN SLEEVES",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17m6sScTdESjF4Muz8So_F2c5iW7ig8sK",
    "Product Image1": "./images/0539LS.png"
  },
  {
    "Item Code": "0540LH",
    "Item Name": "LBN HEAVY CUTTER – RED SLEEVES",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XUh_UlmkZWMXFapoIOFYjFWKl-Xj5Th3",
    "Product Image1": "./images/0540LH.png"
  },
  {
    "Item Code": "0541LM",
    "Item Name": "LBN MINI CUTTER – ORANGE SLEEVES",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kYhOIEskmk-lsrx_y9dNcY495WIj-x_T",
    "Product Image1": "./images/0541LM.png"
  },
  {
    "Item Code": "05421T",
    "Item Name": "1 TO 36 RING STICK ORO",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zCeqUviMgz622tRJsESFacUo6xAFFB0h",
    "Product Image1": "./images/05421T.png"
  },
  {
    "Item Code": "0543LS",
    "Item Name": "LBN SMALL CUTTER – LIGHT GREEN SLEEVES",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17kN0gLwzn-V5KGC5SDdN2pdXD2G1qZuo",
    "Product Image1": "./images/0543LS.png"
  },
  {
    "Item Code": "0544LS",
    "Item Name": "LBN SUPER MINI CUTTER - PINK SLEEVES",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15qaAf9CiFYNa-dSzlYN27XD2KFfybBc6",
    "Product Image1": "./images/0544LS.png"
  },
  {
    "Item Code": "0545LF",
    "Item Name": "LBN FALA CUTTER – BLUE SLEEVES",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ojcrxV-PLhGggtQAJ8rwzNrS4c4HsIAY",
    "Product Image1": "./images/0545LF.png"
  },
  {
    "Item Code": "05461T",
    "Item Name": "1 TO 36 RING SIZER & STICK WITH CASE",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DGmhDvjcFQBGwOpWrrsxdIRTjDM_IRoE",
    "Product Image1": "./images/05461T.png"
  },
  {
    "Item Code": "0547RS",
    "Item Name": "RING SIZER",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14t3-DU4a10FK5FUQH3lT5rQPfYnHV4fJ",
    "Product Image1": "./images/0547RS.png"
  },
  {
    "Item Code": "05481T",
    "Item Name": "1 TO 36 RING SIZER",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1c-ifS79kDYYJjC3ONtA1NVt3ol6R4g_C",
    "Product Image1": "./images/05481T.png"
  },
  {
    "Item Code": "0549TH",
    "Item Name": "THIRD HAND HORSE SHOE BASE WITH ALLIGATOR CLIPS",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=18-qxnrCe16FdCfL02_mizej3wmc7y4SL",
    "Product Image1": "./images/0549TH.png"
  },
  {
    "Item Code": "0550TH",
    "Item Name": "THIRD HAND BASE ROUND SEP",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15pH78Zx-NlRARewmuXv2kM5nERuRWaE7",
    "Product Image1": "./images/0550TH.png"
  },
  {
    "Item Code": "0551TH",
    "Item Name": "THIRD HAND HORSE SHOE BASE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13QBiwLBwn5IwRNCA84ud-vGd_34qVWJy",
    "Product Image1": "./images/0551TH.png"
  },
  {
    "Item Code": "0552SM",
    "Item Name": "SCREW MANDREL 3/32”",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TeuTQqpswSWNoDUZnKX_eOljQkwRp_cD",
    "Product Image1": "./images/0552SM.png"
  },
  {
    "Item Code": "0553SM",
    "Item Name": "SCREW MANDREL 3MM",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1GhpZKk3IbG0ZkEUxKWXiAMGbwMjPK4-r",
    "Product Image1": "./images/0553SM.png"
  },
  {
    "Item Code": "0554PM",
    "Item Name": "PAPER MANDREL STRET",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hUtCMDSC58kMb3fs5GJYw-DW6IIdKU3N",
    "Product Image1": "./images/0554PM.png"
  },
  {
    "Item Code": "0555PM",
    "Item Name": "PAPER MANDREL TAPARED",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dStJDJqiSEYG1f8G-ro_opAnXmtLViAn",
    "Product Image1": "./images/0555PM.png"
  },
  {
    "Item Code": "0556WD",
    "Item Name": "WOODEN DAPPING PUNCH 7 PCS WITH BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wWS5SLcMW5D8eeJYVHbnbEoayYY140DH",
    "Product Image1": "./images/0556WD.png"
  },
  {
    "Item Code": "0557WD",
    "Item Name": "WOODEN DAPPING PUNCH WITH BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mo31_dqBICuTNtQxQgquwnIq1xTjYgqM",
    "Product Image1": "./images/0557WD.png"
  },
  {
    "Item Code": "0558LF",
    "Item Name": "LASHIYA. 1.5/"/" X 4/"/" ( FORMING PLATE )",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KgW6gkhrXnP1yztffLpDl1jWr5lUxdlO",
    "Product Image1": "./images/0558LF.png"
  },
  {
    "Item Code": "0559LF",
    "Item Name": "LASHIYA. 1.5/"/" X 6/"/" ( FORMING PLATE )",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1K70JOlLw35JFVs4kvVj0c3orizI3izTA",
    "Product Image1": "./images/0559LF.png"
  },
  {
    "Item Code": "0560AT",
    "Item Name": "AIR TEXTURING MACHINE (MODEL-300)",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xhJe5_li9WaHvkhr5yvKeqHARH8L3owV",
    "Product Image1": "./images/0560AT.png"
  },
  {
    "Item Code": "0561AT",
    "Item Name": "AIR TEXTURING MACHINE (MODEL-200)",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UkZ7cV_sJn3_MrcZo-3vu8Hyc0Nh0mDV",
    "Product Image1": "./images/0561AT.png"
  },
  {
    "Item Code": "0562BR",
    "Item Name": "BANGLE ROD 15 X 3 - HEXAGON",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kyElXNJ_g0qOtrsfRgbuXnU8hIy0RnPm",
    "Product Image1": "./images/0562BR.png"
  },
  {
    "Item Code": "0563BR",
    "Item Name": "BANGLE ROD 15 X 3 - OCTAGON",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1S3XwEEzDoIUCPGVoHK4VknV4fV2XHngB",
    "Product Image1": "./images/0563BR.png"
  },
  {
    "Item Code": "0564MT",
    "Item Name": "MS TONG 14/"/"",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_QnSTvi-9nkKK3jZINvz3efNrRzOfjIt",
    "Product Image1": "./images/0564MT.png"
  },
  {
    "Item Code": "0565MT",
    "Item Name": "MS TONG 20/"/"",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1NMErZK_kZdJOaFMf9xdXeiN5XeQJoSTN",
    "Product Image1": "./images/0565MT.png"
  },
  {
    "Item Code": "0566BR",
    "Item Name": "BANGLE ROD WITH LINING 3/"/" X 15/"/"",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1cbDI8n0gYD-7Jv9JO7zcqPT_iK8-8_MU",
    "Product Image1": "./images/0566BR.png"
  },
  {
    "Item Code": "0567HC",
    "Item Name": "HIMMAT CUTTER 5/"/"",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=11niNvE9oS9bm4SFzXB22RwAf0vs1VCz7",
    "Product Image1": "./images/0567HC.png"
  },
  {
    "Item Code": "0568HC",
    "Item Name": "HIMMAT CUTTER 6/"/"",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kkDiLbn_qT_ZeiomzZj78U4VUJO5K6AE",
    "Product Image1": "./images/0568HC.png"
  },
  {
    "Item Code": "0569HC",
    "Item Name": "HIMMAT CUTTER 7/"/"",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1MievQELIlPGOrF82UO4oM09oXtjUbZIx",
    "Product Image1": "./images/0569HC.png"
  },
  {
    "Item Code": "0570BS",
    "Item Name": "BANGLE SIZE 1-27",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1s6m9rN8rUs8FJbAamltSgr-8DRQbBo2U",
    "Product Image1": "./images/0570BS.png"
  },
  {
    "Item Code": "0571SP",
    "Item Name": "SCREW PLATE 14 HOLE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1i6aeR973cbh925SNjmrLM174mgpDq_Am",
    "Product Image1": "./images/0571SP.png"
  },
  {
    "Item Code": "0572UB",
    "Item Name": "ULTRA BAG - SMALL",
    "Category": "FILTER BAGS & ULRASONIC BAGS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Mw4rq9hb75d84Od1NJDIPH8weyHctLDi",
    "Product Image1": "./images/0572UB.png"
  },
  {
    "Item Code": "0573UB",
    "Item Name": "ULTRA BAG - BIG",
    "Category": "FILTER BAGS & ULRASONIC BAGS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lO9lWhdz8mLDS_TKb2xT1bc0mYJiy7hc",
    "Product Image1": "./images/0573UB.png"
  },
  {
    "Item Code": "0574HP",
    "Item Name": "HAND PRESS BUTCH NO 1",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Zgq8fIZxVEdfpUDpXnc2BKDg8Va-KQyO",
    "Product Image1": "./images/0574HP.png"
  },
  {
    "Item Code": "0575HP",
    "Item Name": "HAND PRESS BUTCH NO 2",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Wefq7jptZ1fnNAyEeBmOvkWob8puVdNx",
    "Product Image1": "./images/0575HP.png"
  },
  {
    "Item Code": "0576HP",
    "Item Name": "HAND PRESS BUTCH NO 3 ( BUSH )",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dkt36rZokAj6-uO0alx-xKEweP4PyBPw",
    "Product Image1": "./images/0576HP.png"
  },
  {
    "Item Code": "0577RG",
    "Item Name": "RING GUAGE SET",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IFLj4MLnucmscx346JSxD2WOlsd1g0Jc",
    "Product Image1": "./images/0577RG.png"
  },
  {
    "Item Code": "0578RB",
    "Item Name": "3” RING BUFF",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IOZbr_Yx_-lliq82BOJg0u1w6kU_oIqG",
    "Product Image1": "./images/0578RB.png"
  },
  {
    "Item Code": "0579RB",
    "Item Name": "3” RING BUFF SOLID",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=16qTG45K0iwiNkWljGbVnSUMUnwDGh33_",
    "Product Image1": "./images/0579RB.png"
  },
  {
    "Item Code": "0580RB",
    "Item Name": "4” RING BUFF",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Su-SOQcKak3RhK5N-l5C4y5Sm9Y8xo7R",
    "Product Image1": "./images/0580RB.png"
  },
  {
    "Item Code": "0581RB",
    "Item Name": "4” RING BUFF SOLID",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WuUyadiMepD82ZhOyNsRM39aIJ7zRHEP",
    "Product Image1": "./images/0581RB.png"
  },
  {
    "Item Code": "0582CB",
    "Item Name": "2.5/"/" CHAKI BRUSH 1 NO",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1x_G7Y8P7DrcxGM1gRmtW91EAP-5SL62t",
    "Product Image1": "./images/0582CB.png"
  },
  {
    "Item Code": "0583CF",
    "Item Name": "COTTON FINGER GUARDS",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UibNTj85Fk1WzYLEwjJkxqlf7T6-8oeW",
    "Product Image1": "./images/0583CF.png"
  },
  {
    "Item Code": "0584SM",
    "Item Name": "SUPER-550 MICRO PEN",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1oMGFMxPtKntg4QUY1vpPNnHzsS0QgWir",
    "Product Image1": "./images/0584SM.png"
  },
  {
    "Item Code": "0585FB",
    "Item Name": "FLOOR BRUSH",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=12OTYGcUEjt9-B0YZxc1aQtVbXWrNMXWC",
    "Product Image1": "./images/0585FB.png"
  },
  {
    "Item Code": "0586AF",
    "Item Name": "AJANTA FOOT RULER 30CM",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1J9aQIYeEetbpXwtXMP20kBRWKGNLKMAt",
    "Product Image1": "./images/0586AF.png"
  },
  {
    "Item Code": "0587SA",
    "Item Name": "SUPER AJANTA FOOT RULER 30CM",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ekUozLyh0T1XSL7IW5t74RvX3WHcfAhY",
    "Product Image1": "./images/0587SA.png"
  },
  {
    "Item Code": "0588SD",
    "Item Name": "3” SPRING DIVIDER CALIPER",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1y5JwAzzOjVEFlTtL0OXdWY9RZsU1Gca-",
    "Product Image1": "./images/0588SD.png"
  },
  {
    "Item Code": "0589SD",
    "Item Name": "4” SPRING DIVIDER CALIPER",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DttXWVquSXAPFyd7vgkoIC_wCz9dALd8",
    "Product Image1": "./images/0589SD.png"
  },
  {
    "Item Code": "0590BE",
    "Item Name": "BANGLE EXPANDING MACHINE HEAVY",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lp3-gfK8m9J4rfdaf5e8PyNxZubrDc1A",
    "Product Image1": "./images/0590BE.png"
  },
  {
    "Item Code": "0591BE",
    "Item Name": "BANGLE EXPANDING MACHINE",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TLf1Nw0n76Xx8BGYTBet2Xyzj8UnVIuy",
    "Product Image1": "./images/0591BE.png"
  },
  {
    "Item Code": "0592CU",
    "Item Name": "COPPER (U) NO 1",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Ovb1hrRU_7f6inaevOh8VYxwDi_tq47D",
    "Product Image1": "./images/0592CU.png"
  },
  {
    "Item Code": "0593GN",
    "Item Name": "GRINDWELL NORTON STONE 150X50X25",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1S51j8Kjm2Df3e4_du0nCbQZK_gQcRx1q",
    "Product Image1": "./images/0593GN.png"
  },
  {
    "Item Code": "0594OS",
    "Item Name": "OIL STONE 6'",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1T2cQlHMfg77hUsdFk0PB7iPLaa34E1_H",
    "Product Image1": "./images/0594OS.png"
  },
  {
    "Item Code": "0595SC",
    "Item Name": "STEEL SCOOP NO 2",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yc-phh5Rq6IKU6n5C9jcQRHgqS4XTSmN",
    "Product Image1": "./images/0595SC.png"
  },
  {
    "Item Code": "0596SC",
    "Item Name": "STEEL SCOOP NO 4",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hKpB0P1KWMqoM9nLstyp62yBg1BnYGF7",
    "Product Image1": "./images/0596SC.png"
  },
  {
    "Item Code": "0597CP",
    "Item Name": "CHAKU PARA MACHINE",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CGia8Zy5qaLbdMgx-hptgI0FVdjZzB02",
    "Product Image1": "./images/0597CP.png"
  },
  {
    "Item Code": "0598TD",
    "Item Name": "TWEEZERS DIAMOND FINE POINTS",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13pghTdZleTz0zHAuBazv4XdpamnYVjBY",
    "Product Image1": "./images/0598TD.png"
  },
  {
    "Item Code": "0599PD",
    "Item Name": "3 PRONG DIAMOND GRIP BIG",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1brE46kuDlRNMqhroJhuDvxAEh2dcXDgj",
    "Product Image1": "./images/0599PD.png"
  },
  {
    "Item Code": "0600PM",
    "Item Name": "PENCIL MANDREL 3MM HOLE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1NIgy0GcQ7gU--G9ivHEvvv0TQTmVZ0Bh",
    "Product Image1": "./images/0600PM.png"
  },
  {
    "Item Code": "0601PM",
    "Item Name": "PENCIL MANDREL 2MM HOLE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KKaveJbm4PsHjRGGZDcbHbEZmme3dPKV",
    "Product Image1": "./images/0601PM.png"
  },
  {
    "Item Code": "0602BW",
    "Item Name": "BRASS WAX NOJAL SMALL",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bTzX7ptxZHlK8S9uzQhMAL2GmnBO7Zlu",
    "Product Image1": "./images/0602BW.png"
  },
  {
    "Item Code": "0603BW",
    "Item Name": "BRASS WAX NOJAL MEDIUM",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-tT8tFTo1n_slu1fSTsISuoxtF9Nntpp",
    "Product Image1": "./images/0603BW.png"
  },
  {
    "Item Code": "0604BW",
    "Item Name": "BRASS WAX NOJAL BIG",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aHUYm8IUZ3d02Pw7tFIhlMHpMJXMQid6",
    "Product Image1": "./images/0604BW.png"
  },
  {
    "Item Code": "0605RP",
    "Item Name": "RHODIUM PLATING PEN ( SINGLE TAR )",
    "Category": "PLATING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1c1EdyP6pu46MXybf5W-XzOXeXgJipyp1",
    "Product Image1": "./images/0605RP.png"
  },
  {
    "Item Code": "0606RP",
    "Item Name": "RHODIUM PLATING PEN ( DOUBLE TAR )",
    "Category": "PLATING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vrjhwfk-AeG5pc9EjfM-nNWkRKtJM8gJ",
    "Product Image1": "./images/0606RP.png"
  },
  {
    "Item Code": "0607RP",
    "Item Name": "RHODIUM PLATING PEN ( TRIPLE TAR )",
    "Category": "PLATING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=10aXglDjmMneHfeqqB7x0nr5WG4sO_b-O",
    "Product Image1": "./images/0607RP.png"
  },
  {
    "Item Code": "0608SC",
    "Item Name": "STEEL SCOOP NO 3",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12xNehkGfPkcNRecWrqf3ErDQk3b8ndrc",
    "Product Image1": "./images/0608SC.png"
  },
  {
    "Item Code": "0609SC",
    "Item Name": "STEEL SCOOP NO 5",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VtNcnWcUSE6cbdvADxkQGL01-aszaBDS",
    "Product Image1": "./images/0609SC.png"
  },
  {
    "Item Code": "0610BP",
    "Item Name": "BIG POWER 1 TO 36",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1F1RWfv45KossHVjoTItBfYAods5prRQW",
    "Product Image1": "./images/0610BP.png"
  },
  {
    "Item Code": "0611RS",
    "Item Name": "REVOLVING STAND",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uc0HuDdFqEM9zgY1LMXhv1m5wL8aIplg",
    "Product Image1": "./images/0611RS.png"
  },
  {
    "Item Code": "0612TS",
    "Item Name": "TWEEZERS STEEL NO 6",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TvmKz_81CVcBArU_XpWALa3uk2L6B659",
    "Product Image1": "./images/0612TS.png"
  },
  {
    "Item Code": "0613TS",
    "Item Name": "TWEEZERS STEEL # 9",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JAoNJLedlNzd_7atAjDABda7oPY4wU4u",
    "Product Image1": "./images/0613TS.png"
  },
  {
    "Item Code": "0614MC",
    "Item Name": "3” MT COMPASS",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xbVS2PzjGAu5mJ2sXSWeRBENMwzNdm-0",
    "Product Image1": "./images/0614MC.png"
  },
  {
    "Item Code": "0615MC",
    "Item Name": "4” MT COMPASS",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14-pppi7OdX3whK3B8R_JPGKFu79OzNYZ",
    "Product Image1": "./images/0615MC.png"
  },
  {
    "Item Code": "0616TS",
    "Item Name": "TWEEZERS STEEL NO 10",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jW6soi6XoBp9xw5rAqjeOPQRuaAnnoZu",
    "Product Image1": "./images/0616TS.png"
  },
  {
    "Item Code": "0617TS",
    "Item Name": "TWEEZERS STEEL NO 12",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17hrperaZO5ZzT5Ga2eULm_9-iPErnpyV",
    "Product Image1": "./images/0617TS.png"
  },
  {
    "Item Code": "0618TP",
    "Item Name": "TWEEZERS  POINTED 12” #16",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bqGH6juFQ3E5JVRDKTFdVe-t6bG2CH1B",
    "Product Image1": "./images/0618TP.png"
  },
  {
    "Item Code": "0619ST",
    "Item Name": "STEAM TWEEZERS 10/"/"",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1x7TIcJjORAAQjfMFAqISeoo3_fRAY1gb",
    "Product Image1": "./images/0619ST.png"
  },
  {
    "Item Code": "0620ST",
    "Item Name": "STEAM TWEEZERS 12/"/"",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VQ_e1gITnl7HodzTsgs-pwpnK8GGQ3U0",
    "Product Image1": "./images/0620ST.png"
  },
  {
    "Item Code": "0621HN",
    "Item Name": "HANDLE NO.3 STEEL PROX",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1s40uZwigPHnUjJUCqg_20jBFzRVNPQLC",
    "Product Image1": "./images/0621HN.png"
  },
  {
    "Item Code": "0622TP",
    "Item Name": "TWEEZERS POINTED 15/"/"",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1begTaMWuf4M4vixIrxrZ_8O7vkf_XBj8",
    "Product Image1": "./images/0622TP.png"
  },
  {
    "Item Code": "0623TP",
    "Item Name": "TWEEZERS POINTED 10” # 14",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Y1CO-rzSwmXVe6vbn9HZcBbeIfrrkhfb",
    "Product Image1": "./images/0623TP.png"
  },
  {
    "Item Code": "0624HP",
    "Item Name": "HOLE PUNCHING PLIER RED",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12nHrYcML0iAZYkhOYs22I1uJsOnZYrfy",
    "Product Image1": "./images/0624HP.png"
  },
  {
    "Item Code": "0625TW",
    "Item Name": "TWEEZER WITH SHOVEL",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RmGNcPK330DR2iaKWEEIjzHSHOTRzepq",
    "Product Image1": "./images/0625TW.png"
  },
  {
    "Item Code": "0626ST",
    "Item Name": "SOLDERING TWEEZER FIBRE GRIP STR/BENT",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1L_RjAu5u2XO2w8K8-cuF3Bhaj0z3SQz_",
    "Product Image1": "./images/0626ST.png"
  },
  {
    "Item Code": "0627HW",
    "Item Name": "HANDLE WITH PLASTIC GRIP SUP MAROON",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rB0PnIV6f-a77Che-Yk2WqrHVF9u61Pe",
    "Product Image1": "./images/0627HW.png"
  },
  {
    "Item Code": "0628GM",
    "Item Name": "6”G-MARK TRAINGULAR FILE",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1du6XaPGGmNf9T62WN3LddbGtL2hDKuac",
    "Product Image1": "./images/0628GM.png"
  },
  {
    "Item Code": "0629CL",
    "Item Name": "12*12 CHOMOISE LEATHER",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=106LPGO7YWqNuLp8_uZYTGowdz3UcOHRz",
    "Product Image1": "./images/0629CL.png"
  },
  {
    "Item Code": "0630TA",
    "Item Name": "TWEEZERS AA 14G",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WnOLbLsBGJKkLOvHwhl3fb1rxb7rkjnZ",
    "Product Image1": "./images/0630TA.png"
  },
  {
    "Item Code": "0631TM",
    "Item Name": "TWEEZERS MM/SS 14G",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rL8Ts31ey-7WOGtxVjXIXpfu6gM6ASy6",
    "Product Image1": "./images/0631TM.png"
  },
  {
    "Item Code": "0632TD",
    "Item Name": "TWEEZERS DIAMOND R TYPE FINE POINTS",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pX279aSgqreKXuDMdlw--7hEqxNrTaDp",
    "Product Image1": "./images/0632TD.png"
  },
  {
    "Item Code": "0633FT",
    "Item Name": "FLASK TONG 3/"/"",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1x9ana_Qp81Uv_Yb3pzYfWaOwhV3HB0yI",
    "Product Image1": "./images/0633FT.png"
  },
  {
    "Item Code": "0634FT",
    "Item Name": "FLASK TONG 3.5/"/"",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=19RMTs-IQ6JdJEXorAe1FWLstcxlHmo5U",
    "Product Image1": "./images/0634FT.png"
  },
  {
    "Item Code": "0635FT",
    "Item Name": "FLASK TONG 4/"/"",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1k-fTN8LQgmGgI2UjfnO4ZqFsxPmle_hP",
    "Product Image1": "./images/0635FT.png"
  },
  {
    "Item Code": "0636FT",
    "Item Name": "FLASK TONG 5/"/"",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FdRMEbGN2gfqvolKHKX-CHRn0UlGeRIF",
    "Product Image1": "./images/0636FT.png"
  },
  {
    "Item Code": "0637CM",
    "Item Name": "12 C.M UTENSIL BOWL",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dvfHJW0CIkG5-lpZMZHUokALtgE8HR1h",
    "Product Image1": "./images/0637CM.png"
  },
  {
    "Item Code": "0638CM",
    "Item Name": "14 C.M UTENSIL BOWL",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CPdOkdgCEmKpegZKYSmWrtkWa6DwNTRW",
    "Product Image1": "./images/0638CM.png"
  },
  {
    "Item Code": "0639CM",
    "Item Name": "16 C.M UTENSIL BOWL",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UtwsSLa_AAOBaSY4Uo5jjNV04FUcDZeR",
    "Product Image1": "./images/0639CM.png"
  },
  {
    "Item Code": "0640CM",
    "Item Name": "18 C.M UTENSIL BOWL",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1M0ry1tedVQts2Vaki2lJ1HaCXwvqciBx",
    "Product Image1": "./images/0640CM.png"
  },
  {
    "Item Code": "0641CM",
    "Item Name": "20 C.M UTENSIL BOWL",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Sq66fxXLXDl6KCoghUJ_n5E9dPlTisYL",
    "Product Image1": "./images/0641CM.png"
  },
  {
    "Item Code": "0642CM",
    "Item Name": "22 C.M UTENSIL BOWL",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mhRqGlA6tv5KWCDmose1-Y8ltafj06j7",
    "Product Image1": "./images/0642CM.png"
  },
  {
    "Item Code": "0643MU",
    "Item Name": "17 MALA UTENSIL BOWL",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=157iBmzdEjHb1l9a2xEN4Z2Ipg9dJXDf_",
    "Product Image1": "./images/0643MU.png"
  },
  {
    "Item Code": "0644MU",
    "Item Name": "26 MALA UTENSIL BOWL",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DbSQICN33iZCoDq43hneJ4D-NLshT9eP",
    "Product Image1": "./images/0644MU.png"
  },
  {
    "Item Code": "0645CM",
    "Item Name": "26 C.M UTENSIL BOWL",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14aKOX8WfOapIEs9hlKb18gtj1VUyjzJm",
    "Product Image1": "./images/0645CM.png"
  },
  {
    "Item Code": "0646CM",
    "Item Name": "30 C.M UTENSIL BOWL",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mNaf9f3KbLsdtPMd260f6xXDY_CE_5ub",
    "Product Image1": "./images/0646CM.png"
  },
  {
    "Item Code": "0647CM",
    "Item Name": "16 C.M UTENSIL PLATE",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=18qRz_b6Cfe_eK-i7u2v7mBrZqPx4qxc-",
    "Product Image1": "./images/0647CM.png"
  },
  {
    "Item Code": "0648CM",
    "Item Name": "20 C.M UTENSIL PLATE",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1AlIu0vTxixTKElDorbzQRpWFfmrImbbW",
    "Product Image1": "./images/0648CM.png"
  },
  {
    "Item Code": "0649CM",
    "Item Name": "22 C.M UTENSIL PLATE",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FHb6GxCth10Zd8x5jCWCZ-oJfrJq8edb",
    "Product Image1": "./images/0649CM.png"
  },
  {
    "Item Code": "0650CM",
    "Item Name": "26 C.M UTENSIL PLATE",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-UNgTM-9vQFsThSpYRUa84fqbeud3WoG",
    "Product Image1": "./images/0650CM.png"
  },
  {
    "Item Code": "0651HN",
    "Item Name": "HAMMER NO 3 WITH HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1piVTI8tR0O5uziHYpA2Eu1uCE7MgGuis",
    "Product Image1": "./images/0651HN.png"
  },
  {
    "Item Code": "0652HN",
    "Item Name": "HAMMER NO 4 WITH HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aohOdhFnPClvyz58vxLTvbYsqKszBj5G",
    "Product Image1": "./images/0652HN.png"
  },
  {
    "Item Code": "0653HN",
    "Item Name": "HAMMER NO 5 WITH HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FRTS9UGzFNsYIbc9K9o8k2zJ60UCLIi5",
    "Product Image1": "./images/0653HN.png"
  },
  {
    "Item Code": "0654HN",
    "Item Name": "HAMMER NO 6 WITH HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vhH1IpE2TNV24DSXLdjQk2MZ3VJjdSUi",
    "Product Image1": "./images/0654HN.png"
  },
  {
    "Item Code": "0655HN",
    "Item Name": "HAMMER NO 8 WITH HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LEfLrvo-HPToB-78Uk-bjacT80qy_Ls9",
    "Product Image1": "./images/0655HN.png"
  },
  {
    "Item Code": "0656HN",
    "Item Name": "HAMMER NO 20 WITH HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1R9Q7mF2kQRbkmUn1vnwKKbMArncWO4NR",
    "Product Image1": "./images/0656HN.png"
  },
  {
    "Item Code": "0657HN",
    "Item Name": "HAMMER NO 10 WITH HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Lw6TqAliV-fakAaBToiRE_8dvnGzdJ1U",
    "Product Image1": "./images/0657HN.png"
  },
  {
    "Item Code": "0658HN",
    "Item Name": "HAMMER NO 12 WITH HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JYhnxTf-8I74ZkNPyDDikr97uUMlUIGg",
    "Product Image1": "./images/0658HN.png"
  },
  {
    "Item Code": "0659HN",
    "Item Name": "HAMMER NO 14 WITH HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=19GHaQxhYac1VyzDT0JT0fqxhlLI3uI6b",
    "Product Image1": "./images/0659HN.png"
  },
  {
    "Item Code": "0660HN",
    "Item Name": "HAMMER NO 16 WITH HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pZgkroqpbBI9SFdpLBVwoun5AQ3R1P1E",
    "Product Image1": "./images/0660HN.png"
  },
  {
    "Item Code": "0661HN",
    "Item Name": "HAMMER NO 18 WITH HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1reBxOzOaMbygrBZePRdlMKvR-uu_vOid",
    "Product Image1": "./images/0661HN.png"
  },
  {
    "Item Code": "0662ST",
    "Item Name": "SMT TONG 5” - G",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15Qgr429Lip9f5184Zilu2n6G1ZdBfxMs",
    "Product Image1": "./images/0662ST.png"
  },
  {
    "Item Code": "0663ST",
    "Item Name": "SMT TONG 6” - G",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xVjwmRXpDOPCpexEt8ie6ahPFc1HcIaX",
    "Product Image1": "./images/0663ST.png"
  },
  {
    "Item Code": "0664ST",
    "Item Name": "SMT TONG 7” - G",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1awuJrkPSMieJbNtkiOCGDpOceSFFm4Fi",
    "Product Image1": "./images/0664ST.png"
  },
  {
    "Item Code": "0665ST",
    "Item Name": "SMT TONG 8” - G",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1W_WY8CNwcLL1UoE8nj481Bjv1mp8a4zx",
    "Product Image1": "./images/0665ST.png"
  },
  {
    "Item Code": "0666ST",
    "Item Name": "SMT TONG 6” - S",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UTs9aF2FhMVMOTCjhmcNnsKkdgGu8Qru",
    "Product Image1": "./images/0666ST.png"
  },
  {
    "Item Code": "0667ST",
    "Item Name": "SMT TONG 7” - S",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UL_z2fFu0rb9u5ygNbMxleBOM2s9_94y",
    "Product Image1": "./images/0667ST.png"
  },
  {
    "Item Code": "0668ST",
    "Item Name": "SMT TONG 8” - S",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1s5K_0bbFAf20POR3nPeJwPdKo-pqYS5g",
    "Product Image1": "./images/0668ST.png"
  },
  {
    "Item Code": "0669SC",
    "Item Name": "SMT CUTTER 8” - LONG",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hP63NtlITueSMJCtfaG31iao4B61pb4Y",
    "Product Image1": "./images/0669SC.png"
  },
  {
    "Item Code": "0670SC",
    "Item Name": "SMT CUTTER 9” - LONG",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aadib4McOdKKUCzf71FkDull6BOy7mVh",
    "Product Image1": "./images/0670SC.png"
  },
  {
    "Item Code": "0671SC",
    "Item Name": "SMT CUTTER 10” - LONG",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WwPHnUII2y4qPt3F5kQvRfoiFxqcJz8z",
    "Product Image1": "./images/0671SC.png"
  },
  {
    "Item Code": "0672SM",
    "Item Name": "SIEVES - 47MM /42 PLATE",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bE4iq8XjZS8uAvRJSnJ0q9e9ktvaCf_X",
    "Product Image1": "./images/0672SM.png"
  },
  {
    "Item Code": "0673SM",
    "Item Name": "SIEVES - 66MM /42 PLATE",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1R0L1vIbc3e4X-2w_Tr-SS3FvxbR76Ez1",
    "Product Image1": "./images/0673SM.png"
  },
  {
    "Item Code": "0674SM",
    "Item Name": "SIEVES - 80MM /42 PLATE",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WYLQgvJ1700MSX6PzTPtaogB4ENFQWUC",
    "Product Image1": "./images/0674SM.png"
  },
  {
    "Item Code": "0675SM",
    "Item Name": "SIEVES - 107MM /42 PLATE",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gWL1Ha2nkHKegDuohxxQj8OZwU94mdek",
    "Product Image1": "./images/0675SM.png"
  },
  {
    "Item Code": "0676IT",
    "Item Name": "ID TAIPE - 66MM/42 PLATE",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sFbxMvRIURjOF9eu1zhnkMxpljebgNg-",
    "Product Image1": "./images/0676IT.png"
  },
  {
    "Item Code": "0677IT",
    "Item Name": "ID TAIPE - 80MM/42 PLATE",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1nb9vPpakTPNGekCM9wA90tJuswv9SpnO",
    "Product Image1": "./images/0677IT.png"
  },
  {
    "Item Code": "0678FS",
    "Item Name": "FIX SAW FRAME",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yKDAiojKxbpW3N22PRUW5zgnMPQMYAT3",
    "Product Image1": "./images/0678FS.png"
  },
  {
    "Item Code": "0679FS",
    "Item Name": "FOLDING SAW FRAME",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dolkFNe6dFJMIf-7bCs_0_o_GkPybu5K",
    "Product Image1": "./images/0679FS.png"
  },
  {
    "Item Code": "0680CU",
    "Item Name": "COPPER (U) NO 2",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UYM_6ZM_elcdx4xPnhzVuxeSh3ISOaq0",
    "Product Image1": "./images/0680CU.png"
  },
  {
    "Item Code": "0681CU",
    "Item Name": "COPPER (U) NO 3",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Z3b4UWNh8fT7u0f7c0pnBQTX35FYunFz",
    "Product Image1": "./images/0681CU.png"
  },
  {
    "Item Code": "0682CU",
    "Item Name": "COPPER (U) NO 4",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TTDlHa3KyOtoDvFhLE87JKDTnQFzhxEu",
    "Product Image1": "./images/0682CU.png"
  },
  {
    "Item Code": "0683CU",
    "Item Name": "COPPER (U) NO 5",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vGS9DJDPs0iHXtd3F9Lq2tji3sRiktZV",
    "Product Image1": "./images/0683CU.png"
  },
  {
    "Item Code": "0684CU",
    "Item Name": "COPPER (U) NO 6",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=16iXrQ0CnhLrznX5ywkqTPiQ0CCvoqDqZ",
    "Product Image1": "./images/0684CU.png"
  },
  {
    "Item Code": "0685CC",
    "Item Name": "CLAY CRUCIBLE  1 KG",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uP7rT9zC9ckHWZ1mB_tAFOYRzZHr01fI",
    "Product Image1": "./images/0685CC.png"
  },
  {
    "Item Code": "0686CC",
    "Item Name": "CLAY CRUCIBLE  2 KG",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pZiGcdZKcUsiHc87SCrv55QQgKMmmmce",
    "Product Image1": "./images/0686CC.png"
  },
  {
    "Item Code": "0687CC",
    "Item Name": "CLAY CRUCIBLE  3 KG",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=13MfMzx7YWRqhnEU5pfjGjK1yTpiD4yEr",
    "Product Image1": "./images/0687CC.png"
  },
  {
    "Item Code": "0688CC",
    "Item Name": "CLAY CRUCIBLE  4 KG",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iHPOb3ka635VYoCljRy-hL6ueAVZSzkU",
    "Product Image1": "./images/0688CC.png"
  },
  {
    "Item Code": "0689CC",
    "Item Name": "CLAY CRUCIBLE  5 KG",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TWteKyMEEtF_1122Cke4D9sc3o9IRh8w",
    "Product Image1": "./images/0689CC.png"
  },
  {
    "Item Code": "0690CC",
    "Item Name": "CLAY CRUCIBLE  6 KG",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YPWHPyJWRijHq76hnJIbaXQBR6g0F37E",
    "Product Image1": "./images/0690CC.png"
  },
  {
    "Item Code": "0691CC",
    "Item Name": "CLAY CRUCIBLE  8 KG",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JYTyvZ_-1DPbfWP1FjbaNRaacm46CPVq",
    "Product Image1": "./images/0691CC.png"
  },
  {
    "Item Code": "0692CC",
    "Item Name": "CLAY CRUCIBLE 10 KG",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1spzCNICsGno7ZPDF_NsjJq37aM1pqAGO",
    "Product Image1": "./images/0692CC.png"
  },
  {
    "Item Code": "0693CC",
    "Item Name": "CLAY CRUCIBLE 12 KG",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gY4srq7q1IOTIB0WehNXaFgi1qrwpJvw",
    "Product Image1": "./images/0693CC.png"
  },
  {
    "Item Code": "0694CC",
    "Item Name": "CLAY CRUCIBLE  750  GMS",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PMz1AbcFMhc6e8yom_ub0Qg4ieWOejdI",
    "Product Image1": "./images/0694CC.png"
  },
  {
    "Item Code": "0695CC",
    "Item Name": "CLAY CRUCIBLE  500  GMS",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=12cRIqakx01IjROaAWu5Y-FBVMna9wOjC",
    "Product Image1": "./images/0695CC.png"
  },
  {
    "Item Code": "0696CC",
    "Item Name": "CLAY CRUCIBLE  300  GMS",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Gj15DUrhRV5-u5f5hEvgyJ8kpG2SDLdb",
    "Product Image1": "./images/0696CC.png"
  },
  {
    "Item Code": "0697CC",
    "Item Name": "CLAY CRUCIBLE SALAMANDER - A -1/0",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kqolzhfgKRtBbvEg8aqjaUrNimgHzn5y",
    "Product Image1": "./images/0697CC.png"
  },
  {
    "Item Code": "0698CC",
    "Item Name": "CLAY CRUCIBLES SALAMANDER - A - 0.5",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TnVVOn9MGdzWFofV92isRfWFIJQJIhLn",
    "Product Image1": "./images/0698CC.png"
  },
  {
    "Item Code": "0699CC",
    "Item Name": "CLAY CRUCIBLE  SALAMANDER - A - 1",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yWB5IQ2vTZAqQvXsHSjIUwfd3S3Ui1op",
    "Product Image1": "./images/0699CC.png"
  },
  {
    "Item Code": "0700CC",
    "Item Name": "CLAY CRUCIBLE SALAMANDER - A - 2",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_0pzwuJfcgUgP9aPHqNaFA4MjkPNRBg7",
    "Product Image1": "./images/0700CC.png"
  },
  {
    "Item Code": "0701CC",
    "Item Name": "CLAY CRUCIBLE  SALAMANDER - A - 3",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mrwp8DkXRK9TjnFCfnqnPE71s9gFU3Yu",
    "Product Image1": "./images/0701CC.png"
  },
  {
    "Item Code": "0702CC",
    "Item Name": "CLAY CRUCIBLE SALAMANDER - A - 4",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1y_i34hYzvDy9o6Ho2N8NC5aItb168D1U",
    "Product Image1": "./images/0702CC.png"
  },
  {
    "Item Code": "0703CC",
    "Item Name": "CLAY CRUCIBLE  SALAMANDER - A - 5",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LSSarQNa4ez21D-OSwA7ny32H7jop1EV",
    "Product Image1": "./images/0703CC.png"
  },
  {
    "Item Code": "0704CC",
    "Item Name": "CLAY CRUCIBLE SALAMANDER - A - 6",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yHSMWfcJMvaeM84ygsiMEt38x4-YhNdZ",
    "Product Image1": "./images/0704CC.png"
  },
  {
    "Item Code": "0705CC",
    "Item Name": "CLAY CRUCIBLE  SALAMANDER - A - 7",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HnZHZl9xWjT3WJZEH2oCmGzACbjaEhHT",
    "Product Image1": "./images/0705CC.png"
  },
  {
    "Item Code": "0706CC",
    "Item Name": "CLAY CRUCIBLE  SALAMANDER - A - 8",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=19bXuQIne1-WyxT8n118hIV_HCprRUmkn",
    "Product Image1": "./images/0706CC.png"
  },
  {
    "Item Code": "0707CC",
    "Item Name": "CLAY CRUCIBLE  SALAMANDER - A - 10",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lAgAitZ7T2ohPJDioYFRTPel7PF-c2QX",
    "Product Image1": "./images/0707CC.png"
  },
  {
    "Item Code": "0708CC",
    "Item Name": "CLAY CRUCIBLE  SALAMANDER - A  - 12",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KA_fUtRLfq02qk-xrK_Uvct39SRPaIT4",
    "Product Image1": "./images/0708CC.png"
  },
  {
    "Item Code": "0709CC",
    "Item Name": "CLAY CRUCIBLE  SALAMANDER - A - 16",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SmP3Ig79fChztFxTI4RVAyKWuMae0GU2",
    "Product Image1": "./images/0709CC.png"
  },
  {
    "Item Code": "0710CC",
    "Item Name": "CLAY CRUCIBLE  SALAMANDER -A- 20",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1I_85Y4cTuLlMOeeOPaMx58h3adhFGKmb",
    "Product Image1": "./images/0710CC.png"
  },
  {
    "Item Code": "0711CC",
    "Item Name": "CLAY CRUCIBLE SALAMANDER - A - 25",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1X_KCdjzxswxG0f-auHZvuQUFw3QS0gUz",
    "Product Image1": "./images/0711CC.png"
  },
  {
    "Item Code": "0712CC",
    "Item Name": "CLAY CRUCIBLE  SALAMANDER - A - 50",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BZqXmtUEblpwdRXtEzJoDZ14DqIgKJbh",
    "Product Image1": "./images/0712CC.png"
  },
  {
    "Item Code": "0713CC",
    "Item Name": "CLAY CRUCIBLE  SALAMANDER - A - 60",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RkhGLiGr6obNAOVm5F_bflw8DVUQKIbJ",
    "Product Image1": "./images/0713CC.png"
  },
  {
    "Item Code": "0714WS",
    "Item Name": "WIRE AND SHEETS ROLLING  MACHINE  - 8 X 4 DOUBLE HEAD",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Fmwpc5Txi5LabPWGUjdPAFBAJpKihWQO",
    "Product Image1": "./images/0714WS.png"
  },
  {
    "Item Code": "0715FB",
    "Item Name": "FANCY BANGLE SIZER HEAVY",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1OnmYzGMkbU6b393UPUGgWRoCcmw9WzaD",
    "Product Image1": "./images/0715FB.png"
  },
  {
    "Item Code": "0716MM",
    "Item Name": "MINI MACHINE SPECIAL MODEL",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wKswV5niN6XhuhsfFru6FCV44bIbunES",
    "Product Image1": "./images/0716MM.png"
  },
  {
    "Item Code": "0717MH",
    "Item Name": "4/"/"X2/"/" MINI HAND OPERATE SPL MODEL",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1oYJZJOr2PaGvMNJEygjOmIXVdO1Sgb3a",
    "Product Image1": "./images/0717MH.png"
  },
  {
    "Item Code": "0718MH",
    "Item Name": "4/"/"X2/"/"  MINI HAND OPERATE",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_D1b7AtnNLpvmnliK8Kv_sgy3bPiYiBU",
    "Product Image1": "./images/0718MH.png"
  },
  {
    "Item Code": "0719FT",
    "Item Name": "FOLDING TORCH 3/"/"",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14yJsWyBam8c6xOsq6kuHD2Xrio29jnPz",
    "Product Image1": "./images/0719FT.png"
  },
  {
    "Item Code": "0720BN",
    "Item Name": "BURNER  NO. 0",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kONn8wrt2TAyOfmQOxDyfUNjBWXzg5OR",
    "Product Image1": "./images/0720BN.png"
  },
  {
    "Item Code": "0721BN",
    "Item Name": "BURNER NO. 1",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15Q32LOM3H2dJYfq2jlIRxOStXBjyh6fg",
    "Product Image1": "./images/0721BN.png"
  },
  {
    "Item Code": "0722BN",
    "Item Name": "BURNER  NO. 2",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Sn_qWeoFUGXLJrnrwBarH722-S09ruCf",
    "Product Image1": "./images/0722BN.png"
  },
  {
    "Item Code": "0723BN",
    "Item Name": "BURNER  NO   2/5",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1nXPnlv111fdMbxkzhXgqBXeGKTIOejgQ",
    "Product Image1": "./images/0723BN.png"
  },
  {
    "Item Code": "0724BN",
    "Item Name": "BURNER NO. 3",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dwCb26gqXvszGm6a35pOHFPNLJVGZwh6",
    "Product Image1": "./images/0724BN.png"
  },
  {
    "Item Code": "0725BN",
    "Item Name": "BURNER NO. 4",
    "Category": "BURNERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dZUx-bjaLT3SS_p9U51OInbn_QrFogrz",
    "Product Image1": "./images/0725BN.png"
  },
  {
    "Item Code": "0726TF",
    "Item Name": "TONG FOR 1KG COLLAR TYPE CRUCIBLE",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TcU2cqFuac7rETFM3e3CnrYLFLZM9czG",
    "Product Image1": "./images/0726TF.png"
  },
  {
    "Item Code": "0727TF",
    "Item Name": "TONG FOR  2 KGS COLLAR TYPE CRUCIBLE",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Y8hq8IirVhTxUapn6Ehw4VRp8MinN8Wa",
    "Product Image1": "./images/0727TF.png"
  },
  {
    "Item Code": "0728MT",
    "Item Name": "MS TONG 16/"/"  (HEAVY)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tNIpf68Oz7EH1-v1qmfszUa0M0sY2t7f",
    "Product Image1": "./images/0728MT.png"
  },
  {
    "Item Code": "0729MT",
    "Item Name": "MS TONG 18/"/"  {HEAVY)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1nf7dlbcar2upJCH5Sgy2PQykHh_QYHOO",
    "Product Image1": "./images/0729MT.png"
  },
  {
    "Item Code": "0730MT",
    "Item Name": "MS TONG 24/"/"  (HEAVY)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Dqo-qb2UpLq7mwRs1BvLIyCkcQZQpI4F",
    "Product Image1": "./images/0730MT.png"
  },
  {
    "Item Code": "0731MT",
    "Item Name": "MS TONG 30/"/"  (HEAVY)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WpphllNuUeNsUmJDkELAUeikoYdWppuj",
    "Product Image1": "./images/0731MT.png"
  },
  {
    "Item Code": "0732MT",
    "Item Name": "MS TONG 36/"/"  {HEAVY)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=16N4zFiB_s1TccVbbudaV5z7KHLhV1jTd",
    "Product Image1": "./images/0732MT.png"
  },
  {
    "Item Code": "0733AR",
    "Item Name": "1 TO 36 ALUMINIUM  RING GAUGE",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1m8veh0hZptFkqeVI3eUfamxlnsV66GLx",
    "Product Image1": "./images/0733AR.png"
  },
  {
    "Item Code": "0734PM",
    "Item Name": "0.25 POLISHER MACHINE",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1MnV7xZcdqAeJWLniDbg3W6BisV4qiyCo",
    "Product Image1": "./images/0734PM.png"
  },
  {
    "Item Code": "0735PM",
    "Item Name": "0.50 POLISHER  MACHINE",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RVN68dUZOXwJ1Kpk4umICeGoNdE_nh5F",
    "Product Image1": "./images/0735PM.png"
  },
  {
    "Item Code": "0736HP",
    "Item Name": "1 H.P. POLISHER  MACHINE",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Lesoi_oVn2o_kdZBlhwQSebMeLZuA80V",
    "Product Image1": "./images/0736HP.png"
  },
  {
    "Item Code": "0737PS",
    "Item Name": "PS21 - PIERCING SAW  FRAME FIX TYPE  - CHROME PLATED",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12f3djpdJzB1DwhvptgsNQmRAD9c6DpDp",
    "Product Image1": "./images/0737PS.png"
  },
  {
    "Item Code": "0738PS",
    "Item Name": "PS21 - PIERCING SAW  FRAME - BLACK POWDER  COATED",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1r8Y-9ZOe6PJZ3bN5HeRClwDUmCVOpSiB",
    "Product Image1": "./images/0738PS.png"
  },
  {
    "Item Code": "0739SM",
    "Item Name": "SUPER  550 MICRO STATION",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1keCwqwSIxDA-Jo4kPcNFdxo-viE91fcA",
    "Product Image1": "./images/0739SM.png"
  },
  {
    "Item Code": "0740MD",
    "Item Name": "0.12 MINI DRILL MACHINE",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kZuIVr7QKuXLekh0MQD1z8N7hOIzBx_X",
    "Product Image1": "./images/0740MD.png"
  },
  {
    "Item Code": "0741KG",
    "Item Name": "KEVLAR GLOVES 1000 - 14/"/"",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1s1_8uqX_VeAb_7DvILMIfLnUM_Ety3ka",
    "Product Image1": "./images/0741KG.png"
  },
  {
    "Item Code": "0742FP",
    "Item Name": "FILTER PAPER 18.5CM",
    "Category": "FILTER PAPERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mXyz95UmK23eRRJSc_T_J7SrCPubZ79a",
    "Product Image1": "./images/0742FP.png"
  },
  {
    "Item Code": "0743PG",
    "Item Name": "PLIER G TYPE",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iS8i1ZCG1ZrnrcJGLAWWeHCeO2zcNyRv",
    "Product Image1": "./images/0743PG.png"
  },
  {
    "Item Code": "0744KG",
    "Item Name": "KEVLAR GLOVES 1000 - 18/"/"",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zW4phe7bnNK6k_nTdooQUfc920f0g2sr",
    "Product Image1": "./images/0744KG.png"
  },
  {
    "Item Code": "0745CB",
    "Item Name": "3/"/" CHAKI BRUSH SPL",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1w72aBn7tkaXVa3NG6gmAwvUX_HAo5P1A",
    "Product Image1": "./images/0745CB.png"
  },
  {
    "Item Code": "0746KG",
    "Item Name": "KEVLAR GLOVES 1000 - 22/"/"",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ycFCTu9SlWXnWanwqV2HCg8FQ57OhdS3",
    "Product Image1": "./images/0746KG.png"
  },
  {
    "Item Code": "0747FP",
    "Item Name": "FILTER PAPER  32CM",
    "Category": "FILTER PAPERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uARLw377fSCSOq5InUM3c3Z2nCRLZG-N",
    "Product Image1": "./images/0747FP.png"
  },
  {
    "Item Code": "0748FB",
    "Item Name": "FILTER BOARD PAD - 24/"/" X  24/"/"",
    "Category": "FILTER PAPERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QBk5eEV2Lua6i5C9tG97M-IkXO22eaCS",
    "Product Image1": "./images/0748FB.png"
  },
  {
    "Item Code": "0749JJ",
    "Item Name": "JIG JAG MACHINE  WITH 5 ROLLER",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XDIwRVJcKtGitMh8_KpFk4h_sZbQQE4M",
    "Product Image1": "./images/0749JJ.png"
  },
  {
    "Item Code": "0750WM",
    "Item Name": "WOODEN MENDRAL  1.5/"/"X3/"/"X15/"/"",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1y4Sq-hDIsRi6va9r0yft-ngbel114u4n",
    "Product Image1": "./images/0750WM.png"
  },
  {
    "Item Code": "0751HD",
    "Item Name": "HAND DRILL MACHINE 1/4/"/"",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14ZHrXCzNuV9mjy-4sgtrbj-Q6g6hfXz5",
    "Product Image1": "./images/0751HD.png"
  },
  {
    "Item Code": "0752CR",
    "Item Name": "CERAWOOL RTZ 64 - SIZE 3 X 6 ( 400 PCS PER BOX)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XtGW5rFCDp3joVm7jA37qFbly2_AEz-y",
    "Product Image1": "./images/0752CR.png"
  },
  {
    "Item Code": "0753CR",
    "Item Name": "CERAWOOL RTZ 64  - SIZE 6 X 6  ( 200 PCS PER BOX)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Wwzm7hJPmPoX9tiU3qh5N7XAJSH6X70i",
    "Product Image1": "./images/0753CR.png"
  },
  {
    "Item Code": "0754CR",
    "Item Name": "CERAWOOL  RTZ 128  - SIZE 12  X 12  ( 50 PCS PER BOX)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YVzr96VjSZ1576dq8QC4hzrTMtGAJ1CE",
    "Product Image1": "./images/0754CR.png"
  },
  {
    "Item Code": "0755CH",
    "Item Name": "CHISEL HAMMER ( 9.SMM  X 9.SMM  X 48MM)",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Pk0YhkDiSAWB2KRdxFZg-z9OtpXmm5hG",
    "Product Image1": "./images/0755CH.png"
  },
  {
    "Item Code": "0756CH",
    "Item Name": "CHISEL HAMMER ( 12MM  X 67MM  X  228MM)",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lu5Hm1GV2STfuUSp74_TG0KlYVMmA8fQ",
    "Product Image1": "./images/0756CH.png"
  },
  {
    "Item Code": "0757SS",
    "Item Name": "SWISS STYLE HAMMER BIG (12MM  X 65MM X 228MM)",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jyzF0XDHz5S79kuVtZetoRtUh8fvZ5jv",
    "Product Image1": "./images/0757SS.png"
  },
  {
    "Item Code": "0758SS",
    "Item Name": "SWISS STYLE HAMMER  SMALL  (l0MM X 55MM X 203MM)",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LzQFyX3Tx9QLeNHw9Q4aZGoTceb1B5NE",
    "Product Image1": "./images/0758SS.png"
  },
  {
    "Item Code": "0759CH",
    "Item Name": "CHASER HAMMER 1/"/"  WITH ROUND HOCKEY HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Hj6DfOfdA161Dfv6wusEOi1bY3ZecDJW",
    "Product Image1": "./images/0759CH.png"
  },
  {
    "Item Code": "0760CH",
    "Item Name": "CHASER  HAMMER 1/"/" WITH ROUND HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wqTGO--zlssw-ApI-_f28TM9riPoFaUQ",
    "Product Image1": "./images/0760CH.png"
  },
  {
    "Item Code": "0761GS",
    "Item Name": "GOLD SMITH HAMMER",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1h0WcdfTu6aGRiFJXsAZm8727Iy0yFwQ2",
    "Product Image1": "./images/0761GS.png"
  },
  {
    "Item Code": "0762DK",
    "Item Name": "0.75/"/" DERLIN KNOB",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1APHhLPII7WmwtQ6ebQv-o6VEO7DOjik_",
    "Product Image1": "./images/0762DK.png"
  },
  {
    "Item Code": "0763DK",
    "Item Name": "1/"/" DERLIN KNOB",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=113j253Ji4RltUeViet3BlNdQ0jnN-4sc",
    "Product Image1": "./images/0763DK.png"
  },
  {
    "Item Code": "0764BP",
    "Item Name": "4 OZ BALL PEIN HAMMER  WITH ROUND HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=18DvKH6ehG5K9AaBNmYoCDt5MNp2q_qL9",
    "Product Image1": "./images/0764BP.png"
  },
  {
    "Item Code": "0765DH",
    "Item Name": "0.75/"/" DERLIN HAMMER",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uHMtmRKNv35CZ7M2wa_Ro_lQ82oAD85F",
    "Product Image1": "./images/0765DH.png"
  },
  {
    "Item Code": "0766DH",
    "Item Name": "1/"/" DERLIN HAMMER",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1unLWKoinGh_JNZq2ExzKLhSPW8YEFo6F",
    "Product Image1": "./images/0766DH.png"
  },
  {
    "Item Code": "0767CN",
    "Item Name": "CHAIN NOSE PLIER  BOX JOINT V SPRING ( RED SLEEVES)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SpMzBl-kF-N2sPWM2sWSuNtp7E7NIr8q",
    "Product Image1": "./images/0767CN.png"
  },
  {
    "Item Code": "0768RN",
    "Item Name": "ROUND NOSE PLIER BOX JOINT  V SPRING ( RED SLEEVES)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HVn28gUl9fEnJ3Cz65oJYfnLI-wBk3pK",
    "Product Image1": "./images/0768RN.png"
  },
  {
    "Item Code": "0769FN",
    "Item Name": "FLAT NOSE PLIER BOX  JOINT V SPRING ( RED SLEEVES)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zNYjGekZzO8DrqF1C0STPG2uEjp-qGVM",
    "Product Image1": "./images/0769FN.png"
  },
  {
    "Item Code": "0770BN",
    "Item Name": "BEND NOSE PLIER  BOX JOINT V SPRING ( RED SLEEVES)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1G-pEMB0HHVju3-yKr5-InzuU1z9S1I2g",
    "Product Image1": "./images/0770BN.png"
  },
  {
    "Item Code": "0771CN",
    "Item Name": "CHAIN NOSE PLIER BOX JOINT V SPRING (GREEN SLEEVES)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Q5YTndUnsCEKwpmxSEVMYD3ZWoB6La42",
    "Product Image1": "./images/0771CN.png"
  },
  {
    "Item Code": "0772RN",
    "Item Name": "ROUND NOSE PLIER  BOX JOINT V SPRING (GREEN SLEEVES)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fFkvuK8t1DtXiJr-AS_EZrJbw0jDxoq5",
    "Product Image1": "./images/0772RN.png"
  },
  {
    "Item Code": "0773FN",
    "Item Name": "FLAT NOSE PLIER BOX JOINT V SPRING (GREEN SLEEVES)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1MOtgIzQ14H6OvO4sxZfDeSalJ_oAcrRR",
    "Product Image1": "./images/0773FN.png"
  },
  {
    "Item Code": "0774CN",
    "Item Name": "CHAIN NOSE PLIER  BOX JOINT V SPRING ( YELLOW SLEEVES)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12-rOgt54hSAxk57tBpdLF6yHFJV0sEWB",
    "Product Image1": "./images/0774CN.png"
  },
  {
    "Item Code": "0775RN",
    "Item Name": "ROUND NOSE PLIER  BOX JOINT V SPRING ( YELLOW SLEEVES)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1P0Rbl5BfFD1lV9v1ug7T5IUGtuLLHsiu",
    "Product Image1": "./images/0775RN.png"
  },
  {
    "Item Code": "0776FN",
    "Item Name": "FLAT NOSE PLIER BOX JOINT V SPRING ( YELLOW  SLEEVES)",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZRQsv46Gg_aGa9SpydIU5EBCFazOjHQV",
    "Product Image1": "./images/0776FN.png"
  },
  {
    "Item Code": "0777WC",
    "Item Name": "WAX CARVER DOUBLE  ENDED ( SET OF 12)",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1NphLgDN6b9VK3xvaud8waeuhd4BvmzBG",
    "Product Image1": "./images/0777WC.png"
  },
  {
    "Item Code": "0778BP",
    "Item Name": "2 OZ BALL PEIN HAMMER  WITH ROUND HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hNWYkhY3pJrt7qXNELfxjXYEMWK3iu-0",
    "Product Image1": "./images/0778BP.png"
  },
  {
    "Item Code": "0779NK",
    "Item Name": "NK 1 NO HAND PRESS",
    "Category": "CUTTING AND EMBOSING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fSj3DcQ7yozCVxE4gqnB41zifma7H4AE",
    "Product Image1": "./images/0779NK.png"
  },
  {
    "Item Code": "0780NK",
    "Item Name": "NK 2 NO HAND PRESS",
    "Category": "CUTTING AND EMBOSING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VXLOMHUBOTedvuPHpTNZvsuiRafE8R6s",
    "Product Image1": "./images/0780NK.png"
  },
  {
    "Item Code": "0781NK",
    "Item Name": "NK 3 NO HAND PRESS",
    "Category": "CUTTING AND EMBOSING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Ts_WE9ZPh2Z_0axWKU8-Em7BrFiN5zC_",
    "Product Image1": "./images/0781NK.png"
  },
  {
    "Item Code": "0782DH",
    "Item Name": "DRAYER HEATER  MACHINE SMALL",
    "Category": "DRYER MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Kv_GUR2IFmPqDCcIUtKjtOhpbMkVHWQT",
    "Product Image1": "./images/0782DH.png"
  },
  {
    "Item Code": "0783DH",
    "Item Name": "DRYER HEATER MACHINE 3KG",
    "Category": "DRYER MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=19VkI2mUc9bgWKVf03ULNpsqAudP6LJBj",
    "Product Image1": "./images/0783DH.png"
  },
  {
    "Item Code": "0784DH",
    "Item Name": "DRYER HEATER MACHINE 7KG",
    "Category": "DRYER MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wxCUvsmUbyxWuRzmKAvGi2mHNkjgSiWY",
    "Product Image1": "./images/0784DH.png"
  },
  {
    "Item Code": "0785BT",
    "Item Name": "BLOW  TORCH  FIX 3/"/"",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1v4JL9XERDbaUUefkPf5CcI7YtIeNbMBJ",
    "Product Image1": "./images/0785BT.png"
  },
  {
    "Item Code": "0786PB",
    "Item Name": "POLISHING BRUSH",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1g7qOqaops0s-2w_C53QU-7t0YjGAlbXD",
    "Product Image1": "./images/0786PB.png"
  },
  {
    "Item Code": "0787MH",
    "Item Name": "MANIPOLO HAND PIECE M.FS.P001",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1GY4NLbBWlyhRrSDdvLkK2QYhLzFV7hrN",
    "Product Image1": "./images/0787MH.png"
  },
  {
    "Item Code": "0788CG",
    "Item Name": "CABLE FOR 407 GRINDING MACHINE M.MT.DM40703",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LOQQj3ArslTx6PoeUgIwnoG5VOPx-62y",
    "Product Image1": "./images/0788CG.png"
  },
  {
    "Item Code": "0789CB",
    "Item Name": "CARBON BRUSH FOR RENHE 119 M.MT.DM40704",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KyPjaGUfMS7L4NHr-Fs6W33rMtzrOdU5",
    "Product Image1": "./images/0789CB.png"
  },
  {
    "Item Code": "0790CF",
    "Item Name": "CC30 FLEX SHAFT CARBON BRUSH M.FS.P1010",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mVeqP_ID2_ikcsVJwbuPmpXJCEaGXDs4",
    "Product Image1": "./images/0790CF.png"
  },
  {
    "Item Code": "0791SF",
    "Item Name": "SR FLEX SHAFT CARBON BRUSH M.FS.P3001",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zIl-5U6Q04z6amLmpIIYlQDYkbvCbvNO",
    "Product Image1": "./images/0791SF.png"
  },
  {
    "Item Code": "0792CB",
    "Item Name": "CARBON BRUSH FOR 204 motor M.MT.PJ204-6",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WQRh4n23LdSQPQoTL5VowcpaWwL6ybzL",
    "Product Image1": "./images/0792CB.png"
  },
  {
    "Item Code": "0793GG",
    "Item Name": "GT-3000S GAS TOURCH JP",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aMiFauDKNKvNKI4jPqc9nJBvcIZEgc1i",
    "Product Image1": "./images/0793GG.png"
  },
  {
    "Item Code": "0794GT",
    "Item Name": "5000S TORCH T.TO GT5000",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15dqdfDOOWgIK1T0phBeHTACDSg4t3hjn",
    "Product Image1": "./images/0794GT.png"
  },
  {
    "Item Code": "0795UT",
    "Item Name": "USA TORCH FOR OXYGEN T.TO.A005",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14k_aVaNxoT7_VNQHi8AZrsbbqpu1FAcs",
    "Product Image1": "./images/0795UT.png"
  },
  {
    "Item Code": "0796BW",
    "Item Name": "BRASS WIRE BRUSH WITH WOOD HANDLE T.BW.MS001",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YOZmulAj5LV-JHkYBtWKZ1_bIybJZ0mO",
    "Product Image1": "./images/0796BW.png"
  },
  {
    "Item Code": "0797HT",
    "Item Name": "35 CM HIGH TEMP GLOVE T.HP.0002S",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hjOWMfYlR8Zpf1l5DbqwvDYnu3iYMtjt",
    "Product Image1": "./images/0797HT.png"
  },
  {
    "Item Code": "0798SL",
    "Item Name": "SPLIT LAP CLAMP 2.35*42.5 T.BW.JB002",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IPa9XXGJnbIX_dXOBtE1iQbYPtuoqKPs",
    "Product Image1": "./images/0798SL.png"
  },
  {
    "Item Code": "0799SD",
    "Item Name": "SANDBAR D T.BW.JB012",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aP8iOYBm306ULIr0L_3hM4tfsCn2W5Qt",
    "Product Image1": "./images/0799SD.png"
  },
  {
    "Item Code": "0800PR",
    "Item Name": "POLISHING RUBBER WITH SHANK TOP :13*H15MM T.BW.J1003-270",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=128gWk2BTde_CHseq1aaVA0YsytNezqLL",
    "Product Image1": "./images/0800PR.png"
  },
  {
    "Item Code": "0801PR",
    "Item Name": "POLISHING RUBBER WITH SHANK TOP :17*H12MM T.BW.J1003-271",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1p7uC0GDtZZmsq64uYgIB-wSihVewXCk_",
    "Product Image1": "./images/0801PR.png"
  },
  {
    "Item Code": "0802DS",
    "Item Name": "DIAMOND SAND NEEDLE T.CG.SZ036",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1e41YTUvn6AYHQQuPFF8AXGf8Na4QNum1",
    "Product Image1": "./images/0802DS.png"
  },
  {
    "Item Code": "0803RW",
    "Item Name": "RUBBER WHEEL 22X3MM T.BW.J0006",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1AICjq6Tz9ENRWS8T4BrAoQJttbRO-69X",
    "Product Image1": "./images/0803RW.png"
  },
  {
    "Item Code": "0804RW",
    "Item Name": "RUBBER WHEEL 22X3MM T.BW.J0007",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WtJXk0nIAOkr1Rhu8pNw0JFBVmm9n98B",
    "Product Image1": "./images/0804RW.png"
  },
  {
    "Item Code": "0805RW",
    "Item Name": "RUBBER WHEEL 22X3MM T.BW. J0008",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_vVe2KF-C-GQ1Yw_M4BdZJyzuboXYiqh",
    "Product Image1": "./images/0805RW.png"
  },
  {
    "Item Code": "0806SF",
    "Item Name": "4*9 SUS304 FLASK WITH RANGE WITH HOLE T.FL.C4009-K",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CYQeiOzfVDWLRi2QPDvj8ZyvKaqyuHIC",
    "Product Image1": "./images/0806SF.png"
  },
  {
    "Item Code": "0807PS",
    "Item Name": "4/"/" PYRAMID SHAPE RUBBER BASE T.RB.A0040",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-cV2i8V4HAt81iA7W4ACbgjPJjXoHT5v",
    "Product Image1": "./images/0807PS.png"
  },
  {
    "Item Code": "0808PS",
    "Item Name": "3.5/"/" PYRAMID SHAPE RUBBER BASE T.RB.A0035",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Q3joSj763-J_WUahUQIQXp3eBIfgsWen",
    "Product Image1": "./images/0808PS.png"
  },
  {
    "Item Code": "0809PS",
    "Item Name": "3/"/" PYRAMID SHAPE RUBBER BASE T.RB.A0030",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13b9ZLW3_CgU0mccHepUyWPXwI-J6PkMF",
    "Product Image1": "./images/0809PS.png"
  },
  {
    "Item Code": "0810DG",
    "Item Name": "DEGREE GAUGE T.RC.RR026",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xMt-kCRsD7PkYVBSj895m6GVh5v44eBw",
    "Product Image1": "./images/0810DG.png"
  },
  {
    "Item Code": "0811AP",
    "Item Name": "ANTILOPE POINTED NOSE PILERS T.SP.QLP001",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=18QZ5o5z0F5XslM2X3f9avmT4ZLhftdbo",
    "Product Image1": "./images/0811AP.png"
  },
  {
    "Item Code": "0812AR",
    "Item Name": "ANTILOPE ROUND NOSE PILERS T.SP.QLP002",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13ul0jCH_NCgSRRDOInV0iv0ght3lcNVL",
    "Product Image1": "./images/0812AR.png"
  },
  {
    "Item Code": "0813AF",
    "Item Name": "ANTILOPE FLAT NOSE PILERS T.SP.QLP003",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Q1M_WsQF1w9nMLcnzbVzZmc07S_MBE2P",
    "Product Image1": "./images/0813AF.png"
  },
  {
    "Item Code": "0814SB",
    "Item Name": "SANDING BLASTER M.SP.00009",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Q1j5Tmlp4VuLBTy2onl8yjHXLFspD4i_",
    "Product Image1": "./images/0814SB.png"
  },
  {
    "Item Code": "0815SO",
    "Item Name": "SMALL ONE HEAD GRINDING MACHINE M.MT.DM002",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1w3UtSB76fPH90IX1gA0bH9ObJ92uJjhk",
    "Product Image1": "./images/0815SO.png"
  },
  {
    "Item Code": "0816GP",
    "Item Name": "300 G POCKET DIGITAL SCALE DM.3 M.ES.J0500",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1C-NyGzZsY9Fyed6CZczieflrV1Hze5Wa",
    "Product Image1": "./images/0816GP.png"
  },
  {
    "Item Code": "0817SF",
    "Item Name": "SR FLEX SHAFT INNER ROTOR M.FS.P3003",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IXMnD8Wune6M7B7Gepv2kWPFB2iOPsyZ",
    "Product Image1": "./images/0817SF.png"
  },
  {
    "Item Code": "0818SF",
    "Item Name": "SR FLEX SHAFT OUTER CABLE M.FS.P3004",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WMVa9iOwtx6422fi1a59fSCvyshnwzuG",
    "Product Image1": "./images/0818SF.png"
  },
  {
    "Item Code": "0819CI",
    "Item Name": "CC30 INSIDE ROTOR M.FS.P1002",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wkZN0AaeKTuS2encobkGHSBzukiQGk_t",
    "Product Image1": "./images/0819CI.png"
  },
  {
    "Item Code": "0820CF",
    "Item Name": "CC30 FLEX SHAFT OUTER CABLE M.FS.P1003",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gLCVIBejjZ7wZ7nMjYlN92fvkYn1-JR3",
    "Product Image1": "./images/0820CF.png"
  },
  {
    "Item Code": "0821KI",
    "Item Name": "KT-A15 INSIDE ROTOR",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1EyR036Dnx0bLZk2QLrInOBY6xGpvySWy",
    "Product Image1": "./images/0821KI.png"
  },
  {
    "Item Code": "0822KO",
    "Item Name": "KT-A15 OUTER ROTOR",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1V6eFb7wJLVaWfDlfXMSlchNwZBzjoOKQ",
    "Product Image1": "./images/0822KO.png"
  },
  {
    "Item Code": "0823CB",
    "Item Name": "CARBON BRUSH FOR RENHE119 M.MT.DM40704",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eT5tXmhsI9To_9VClbbnTN0xSg4Xjel5",
    "Product Image1": "./images/0823CB.png"
  },
  {
    "Item Code": "0824RT",
    "Item Name": "ROUND TYPE DRAWING PLATE 39 HOLES 0.26-4.1 T.WM.A0008",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1k8xtOqhWCx4oyxRmY3T6zIRbY03jOylf",
    "Product Image1": "./images/0824RT.png"
  },
  {
    "Item Code": "0825SS",
    "Item Name": "SAND FOR SAND BLASTING 120 H.PD.00032",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-299Pt6h4eiVqeRJxphmV4cWesoAkoiN",
    "Product Image1": "./images/0825SS.png"
  },
  {
    "Item Code": "0826PM",
    "Item Name": "POLISHING MOTOR BLACK M.MT.DM003-B",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1om5Lr8CTHi-uy0d9ZoZpMV7aSpFPvCtB",
    "Product Image1": "./images/0826PM.png"
  },
  {
    "Item Code": "0827BT",
    "Item Name": "BRUSH 1C T.BW.B1033",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yyeK2l7yhsRBY9rJOnFy4O_jqQNNVEIz",
    "Product Image1": "./images/0827BT.png"
  },
  {
    "Item Code": "0828WH",
    "Item Name": "WOOD HUB BRISTLE BRUSH 1C T.BW.B1031",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XhMrzXAylJvcvZ-klnwaKCgDpKFMBTTQ",
    "Product Image1": "./images/0828WH.png"
  },
  {
    "Item Code": "0829WH",
    "Item Name": "WOOD HUB BRISTLE BRUSH 2C T.BW.B1036",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XOequz9Lr487QmfXz8E2S5l-CwOVq8EY",
    "Product Image1": "./images/0829WH.png"
  },
  {
    "Item Code": "0830CB",
    "Item Name": "CLEANING BASKET FOR M.UC.200 HD ULTRASONIC",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Mx9oTE6MJ5efl7BZQ772GhYgt2GdG1l2",
    "Product Image1": "./images/0830CB.png"
  },
  {
    "Item Code": "0831WH",
    "Item Name": "WOOD HUB BRISTLE BRUSH 4C T.BW.B1035",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ioNwm_bcyX1fv7FUlQUBh4JMAzL6nY0d",
    "Product Image1": "./images/0831WH.png"
  },
  {
    "Item Code": "0832RB",
    "Item Name": "RED BRUSH 4C STRAIGHT T.BW.A1005-B",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HTIBJ_AbQ7Tz89foLFCPijO-YNxiGs_V",
    "Product Image1": "./images/0832RB.png"
  },
  {
    "Item Code": "0833BH",
    "Item Name": "BRUSH WITHOUT HANDLE BROWN COLOR 22MM TBW.MS024-22",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Cp5thzuDtLMUETRoeAhXdQPOp832R-0K",
    "Product Image1": "./images/0833BH.png"
  },
  {
    "Item Code": "0834BH",
    "Item Name": "BRUSH WITHOUT HANDLE BROWN COLOR 19MM TBW.MS024-19",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ORpImnMzbOLkaqcOzs4Q-ZVfk5y3AABM",
    "Product Image1": "./images/0834BH.png"
  },
  {
    "Item Code": "0835BH",
    "Item Name": "BRUSH WITHOUT HANDLE BLACK & WHITE COLOR 19MM TBW.MS025-19",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IGaEDtiG0kEiphxekSfJMBaOl_gzoPpv",
    "Product Image1": "./images/0835BH.png"
  },
  {
    "Item Code": "0836BH",
    "Item Name": "BRUSH WITHOUT HANDLE BLACK &WHITE COLOR 22MM TBW.MS025-22",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1MZXcWuheQ4zcynxKAWMWElTGsle_hCVf",
    "Product Image1": "./images/0836BH.png"
  },
  {
    "Item Code": "0837BH",
    "Item Name": "BRUSH WITHOUT HANDLE BLACK  COLOR 22MM TBW.MS019-22",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=125EVCJsycUYOuM3FPO1xcBrZY2cSjyaR",
    "Product Image1": "./images/0837BH.png"
  },
  {
    "Item Code": "0838BH",
    "Item Name": "BRUSH WITHOUT HANDLE BLACK  COLOR 19MM TBW.MS019-19",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Z899KuA9TONSUbWu7Gpu6GJuEoPTTT2d",
    "Product Image1": "./images/0838BH.png"
  },
  {
    "Item Code": "0839FL",
    "Item Name": "Fiber Laser Marking Machine 100w",
    "Category": "LASER MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sL3Xnjn4lhekuchzkPL5LXY0JPBFMSoI",
    "Product Image1": "./images/0839FL.png"
  },
  {
    "Item Code": "0840FL",
    "Item Name": "Fiber Laser Marking Machine 50w",
    "Category": "LASER MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jOvCRaZAZ4Hbmk3c1PixR0fQutLuAKy4",
    "Product Image1": "./images/0840FL.png"
  },
  {
    "Item Code": "0841LT",
    "Item Name": "Laser Type:Qcw 150w",
    "Category": "LASER MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=1binmTJW_z5P3ihUJYuXJKGe359-elmyf",
    "Product Image1": "./images/0841LT.png"
  },
  {
    "Item Code": "0842MN",
    "Item Name": "Model No.:MLA-W-A01  230w",
    "Category": "LASER MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=1GbYT2cE4SSN_8G3aElI6XbetbUVTffPt",
    "Product Image1": "./images/0842MN.png"
  },
  {
    "Item Code": "0843AC",
    "Item Name": "Automatic cutting 5 fixture Black color",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1X7fqL8XYq-Y4mu3Cale_BX7LBdSs3vpz",
    "Product Image1": "./images/0843AC.png"
  },
  {
    "Item Code": "0844DA",
    "Item Name": "Dust Aspirator With Fliter 200w",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TaW3xhSjkbEiCjM_A4JOrVWjUAVTl3jX",
    "Product Image1": "./images/0844DA.png"
  },
  {
    "Item Code": "0845CF",
    "Item Name": "Cutting Fixture",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1OUGPCY6PgGpODYQUeCyN2onMX5kzgy5L",
    "Product Image1": "./images/0845CF.png"
  },
  {
    "Item Code": "0846RR",
    "Item Name": "Rotary For Ring, Build In 50mm",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pfRgXJh9MsRPxlTVkmPazKw3Vp-Flrdj",
    "Product Image1": "./images/0846RR.png"
  },
  {
    "Item Code": "0847FL",
    "Item Name": "Fiber Laser Marking Machine  20w",
    "Category": "LASER MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TyXpfOxHieLjtySDvZ2yqItiYHO7ppCt",
    "Product Image1": "./images/0847FL.png"
  },
  {
    "Item Code": "0848BP",
    "Item Name": "BORIC POWDER",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zVoPCa19pJkZcmE2TY-4348kQmJMW-Pe",
    "Product Image1": "./images/0848BP.png"
  },
  {
    "Item Code": "0849SA",
    "Item Name": "SWAGA ",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QzJ6vw__3xAoQqJIYFcYx_FKzqIWLlBk",
    "Product Image1": "./images/0849SA.png"
  },
  {
    "Item Code": "0850FI",
    "Item Name": "FATKIRI ",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1GphXQtY_ib-3FVVX571rhPJI5KRepamU",
    "Product Image1": "./images/0850FI.png"
  },
  {
    "Item Code": "0851NR",
    "Item Name": "NAUSAR",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15_yx3rkdEwooJzBHzEfRmIZkyMbiQPrl",
    "Product Image1": "./images/0851NR.png"
  },
  {
    "Item Code": "0852SA",
    "Item Name": "SOORA",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qf3PwV4UrLl4Zk6ySoPfsMxejb_z2VXG",
    "Product Image1": "./images/0852SA.png"
  },
  {
    "Item Code": "0853BI",
    "Item Name": "BISCUIT INGOT MOULD 100GM",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uTpdAManRYLcFuXqRS7tLCR-iqa_ENRZ",
    "Product Image1": "./images/0853BI.png"
  },
  {
    "Item Code": "0854BI",
    "Item Name": "BISCUIT INGOT MOULD 500GM",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=11Ka0-yxX5OcRDVdl6R8s1lKQnuYS2FmE",
    "Product Image1": "./images/0854BI.png"
  },
  {
    "Item Code": "0855BI",
    "Item Name": "BISCUIT INGOT MOULD 200GM",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CZ1rkrbQwwXh_-vW-bETSZdxsQ5LsMVT",
    "Product Image1": "./images/0855BI.png"
  },
  {
    "Item Code": "0856BI",
    "Item Name": "BISCUIT INGOT MOULD 300GM",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pwd5qqfsYRpsHulHmwIl4_wo6_JYnbsR",
    "Product Image1": "./images/0856BI.png"
  },
  {
    "Item Code": "0857BI",
    "Item Name": "BISCUIT INGOT MOULD 1KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kjJXAENrL24sYaTP8GQyLwbSpCrPaSP5",
    "Product Image1": "./images/0857BI.png"
  },
  {
    "Item Code": "0858BI",
    "Item Name": "BISCUIT INGOT MOULD 2KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xrX4xIPXda3kFsoL7UZH-2o9owgD9pPt",
    "Product Image1": "./images/0858BI.png"
  },
  {
    "Item Code": "0859BI",
    "Item Name": "BISCUIT INGOT MOULD 5KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dBOQwLLdmkPTK3ae6enX1U--JUrm3mrz",
    "Product Image1": "./images/0859BI.png"
  },
  {
    "Item Code": "0860BI",
    "Item Name": "BISCUIT INGOT MOULD 7KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fSy2VdPL4YmillVvYw09dqUqS5Tu2XnJ",
    "Product Image1": "./images/0860BI.png"
  },
  {
    "Item Code": "0861BI",
    "Item Name": "BISCUIT INGOT MOULD 2KG LONG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qtq6L5hfIaNBAQCy1ZoLAMKfiWX6dO_D",
    "Product Image1": "./images/0861BI.png"
  },
  {
    "Item Code": "0862BI",
    "Item Name": "BISCUIT INGOT MOULD 10KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1meL7UWyZHgq--NatNWsCda641aIpXk-f",
    "Product Image1": "./images/0862BI.png"
  },
  {
    "Item Code": "0863BI",
    "Item Name": "BISCUIT INGOT MOULD 3 IN 1 ROUND",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LFboDmb6lGqdP3zbu7PPYKtk1jtFko_W",
    "Product Image1": "./images/0863BI.png"
  },
  {
    "Item Code": "0864BI",
    "Item Name": "BISCUIT INGOT MOULD 3 IN 1 RECTANGLE",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wr7uxPtTGewNrcFcI-LtmyhK4f7u_GY1",
    "Product Image1": "./images/0864BI.png"
  },
  {
    "Item Code": "0865RP",
    "Item Name": "ROUND PLATE 4 INCH",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12ilcIHVkh99ocvjk3d8EMxqIYrA9KNv7",
    "Product Image1": "./images/0865RP.png"
  },
  {
    "Item Code": "0866RP",
    "Item Name": "ROUND PLATE 5 INCH",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Pt-HhQaB41GaSR9EXrMBoEQrfZy6_TGa",
    "Product Image1": "./images/0866RP.png"
  },
  {
    "Item Code": "0867DB",
    "Item Name": "DOMING BLOCK MIX BRASS (3X3) 2930 GRAM",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KT_saNBU0gETlDcrLyB1V877WQXJiKk1",
    "Product Image1": "./images/0867DB.png"
  },
  {
    "Item Code": "0868PH",
    "Item Name": "PINVISE HEAVY",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qzKbmY-wV9b40tHjGKhNtdm9dt7kQBTH",
    "Product Image1": "./images/0868PH.png"
  },
  {
    "Item Code": "0869PC",
    "Item Name": "PINVISE CROSS KNURLED",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1OQ-CqgGaBBwS8DLf4zvt7LqBU3kg386O",
    "Product Image1": "./images/0869PC.png"
  },
  {
    "Item Code": "0870BR",
    "Item Name": "BALL ROLLING DIE 5 INCH SPECIAL",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17qVmrhxNFmXKViB92PLoTjwLliTTmaSD",
    "Product Image1": "./images/0870BR.png"
  },
  {
    "Item Code": "0871UG",
    "Item Name": "UNIVERSAL GRAVER CHUCK HALF HOLE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JgCk1tsKpgIujkokr6a3LQfxgB7hO6JD",
    "Product Image1": "./images/0871UG.png"
  },
  {
    "Item Code": "0872MC",
    "Item Name": "MUSHROOM CHUCK HANDLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1di0ud4IDm28YU4fK05YXAmfN2cFh05aw",
    "Product Image1": "./images/0872MC.png"
  },
  {
    "Item Code": "0873BR",
    "Item Name": "BALL ROLLING DIE ONLY SCREW",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13w0BMYIePKzTdyr80hzllVqjVJSmS7eu",
    "Product Image1": "./images/0873BR.png"
  },
  {
    "Item Code": "0874BR",
    "Item Name": "BALL ROLLING DIE ONLY STUD",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=18qregciIveEgRfN-EP1yGiDlEsHBKEe4",
    "Product Image1": "./images/0874BR.png"
  },
  {
    "Item Code": "0875AS",
    "Item Name": "ANVIL SQUARE (5 CM X 5 CM X7.5 CM) 1450 GRAM",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BGcgiw3o7sGMM0RLs9Dqywe3Hu_-m1Cg",
    "Product Image1": "./images/0875AS.png"
  },
  {
    "Item Code": "0876BR",
    "Item Name": "BANGLE ROD ROUND 3/"/" X 15/"/" SADA",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1d-6PfS38VaDYvnh8Y35WF2OY9xztAfMt",
    "Product Image1": "./images/0876BR.png"
  },
  {
    "Item Code": "0877BR",
    "Item Name": "BANGLE ROD ROUND 2.5/"/" X 12/"/" SADA",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sYeGmeL-iqKLGveRrl3xVAHZHIBoE-dy",
    "Product Image1": "./images/0877BR.png"
  },
  {
    "Item Code": "0878BR",
    "Item Name": "BANGLE ROD ROUND 3/"/" X 15/"/" NICKLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ACRp3RfJYsoGSjDieaWMZ2iab7IDDoXT",
    "Product Image1": "./images/0878BR.png"
  },
  {
    "Item Code": "0879BR",
    "Item Name": "BANGLE ROD ROUND 2.5/"/" X 12/"/" NICKLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=18ksX8NkKJHVhHKHELwgzZBG0NxxO7ODY",
    "Product Image1": "./images/0879BR.png"
  },
  {
    "Item Code": "0880BR",
    "Item Name": "BANGLE ROD OVEL 3/"/" X 15/"/" SADA",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1z0RQKAWCbjB46bdw1WFYnMZxgFoH_0SL",
    "Product Image1": "./images/0880BR.png"
  },
  {
    "Item Code": "0881BR",
    "Item Name": "BANGLE ROD OVEL 2.5/"/" X 12/"/" C.I. SADA",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mXsgNSzN8vBT6ej9TeOXyj7OofFcjiET",
    "Product Image1": "./images/0881BR.png"
  },
  {
    "Item Code": "0882BR",
    "Item Name": "BANGLE ROD OVEL 15/"/" X 3/"/" NICKEL",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_myAYr5qulEQjhZ7EeaYLwjuy3kr9o0z",
    "Product Image1": "./images/0882BR.png"
  },
  {
    "Item Code": "0883BR",
    "Item Name": "BANGLE ROD OVEL 12/"/" X 2.5/"/" NICKEL",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Wji6edsmDnaztr1uwEuBGGOKpdwdPgJU",
    "Product Image1": "./images/0883BR.png"
  },
  {
    "Item Code": "0884RR",
    "Item Name": "RING ROD 1.25/"/" X 15/"/" POLISH",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fDC9aWcOB1nz8mxBa-tWlybf9CrB_mqK",
    "Product Image1": "./images/0884RR.png"
  },
  {
    "Item Code": "0885RR",
    "Item Name": "RING ROD 1/"/" X 10/"/" POLISH",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15jMDx6ZskCK7HtxEGcGEx0PfzPTSU_Ms",
    "Product Image1": "./images/0885RR.png"
  },
  {
    "Item Code": "0886RR",
    "Item Name": "RING ROD 1/"/" X 12/"/" POLISH",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1adO6uuVECJZLRsUkzeAEN7LejLYxR_bD",
    "Product Image1": "./images/0886RR.png"
  },
  {
    "Item Code": "0887WS",
    "Item Name": "WIRE SET 1 TO 25",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pDYCxmxB7mP05GVFo9c9bT_y95fiGJCl",
    "Product Image1": "./images/0887WS.png"
  },
  {
    "Item Code": "0888RR",
    "Item Name": "RING ROD 5/8/"/" X 6/"/" SADA",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TAOBNX98v8vFdTGVc8ytGJ_OiWbGmWDf",
    "Product Image1": "./images/0888RR.png"
  },
  {
    "Item Code": "0889RR",
    "Item Name": "RING ROD 1/2/"/" X 12/"/" SADA",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mnNsjEGryZdV0ycFYmN86goKBZjhRihV",
    "Product Image1": "./images/0889RR.png"
  },
  {
    "Item Code": "0890RS",
    "Item Name": "RING STICK NO 1 TO 36",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RtJcsElq5JiNbphS2ppq3b79wUKewnA6",
    "Product Image1": "./images/0890RS.png"
  },
  {
    "Item Code": "0891PD",
    "Item Name": "PCB DRILL",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1raYMQSUgv92ZjJp_0ktbkZaQrr5lzcz3",
    "Product Image1": "./images/0891PD.png"
  },
  {
    "Item Code": "0892JW",
    "Item Name": "JALI 6/"/" X 6/"/" WITH BORDER",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1AC_C5_6A3i8cvOlcX2I3BTHFS_idNXkr",
    "Product Image1": "./images/0892JW.png"
  },
  {
    "Item Code": "0893JI",
    "Item Name": "JALI 5 X 10 INCH WITH BORDER",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pv6BTL5zduVIWH8-f2YyXVFF45KF7WYS",
    "Product Image1": "./images/0893JI.png"
  },
  {
    "Item Code": "0894EL",
    "Item Name": "EYE LOUPE 21MM CROME WITH RUBBER 20X",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jAPVREoybqf_iwQaWDPQppWFlQIkCPDz",
    "Product Image1": "./images/0894EL.png"
  },
  {
    "Item Code": "0895EL",
    "Item Name": "EYE LOUPE 21MM OVEL CROME WITH RUBBER 20X",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1s4IrqZlgbVAcyc7ZNRaTDcIh3V6pax7K",
    "Product Image1": "./images/0895EL.png"
  },
  {
    "Item Code": "0896TW",
    "Item Name": "T.C.WIRE DRAWING DIES 6 X 4",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KQTb8N78n4SGdvXq9tuNGzbpk2toCci8",
    "Product Image1": "./images/0896TW.png"
  },
  {
    "Item Code": "0897CO",
    "Item Name": "CARBIDE OPNI",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CMp-o72DeBkCkPuonq2_BEsr0Fz6T69Q",
    "Product Image1": "./images/0897CO.png"
  },
  {
    "Item Code": "0898CC",
    "Item Name": "CARBIDE CHIKLI",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pcW0zSX3q5_oLnEjrjxVyU0KSIm_QEeb",
    "Product Image1": "./images/0898CC.png"
  },
  {
    "Item Code": "0899CS",
    "Item Name": "CHIKLI SADA",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VexMioQjeGtmIZPLyvhVE-HQnE-ttKJR",
    "Product Image1": "./images/0899CS.png"
  },
  {
    "Item Code": "0900EG",
    "Item Name": "EAGLE GAS LIGHTER",
    "Category": "SOLDERING GUNS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PviI9lyGN5uiMwqf-cYoZRITZ9Ml4YID",
    "Product Image1": "./images/0900EG.png"
  },
  {
    "Item Code": "0901DP",
    "Item Name": "DAPPING PUNCH SET OF 12",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yOGRo4n8HnyCrz_n1HP8CM7a3QBHsI46",
    "Product Image1": "./images/0901DP.png"
  },
  {
    "Item Code": "0902DP",
    "Item Name": "DAPPING PUNCH SET OF 18",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YYbZ-QcGQzxWceDmD7v4uCkyGVhRwRII",
    "Product Image1": "./images/0902DP.png"
  },
  {
    "Item Code": "0903DP",
    "Item Name": "DAPPING PUNCH SET OF 24",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1293ErS2FR0GqqjnUqDqacMHADRJt-cF5",
    "Product Image1": "./images/0903DP.png"
  },
  {
    "Item Code": "0904DP",
    "Item Name": "DAPPING PUNCH SET OF 36",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aVOGpjKDTdFdlRZxfQn3KmndfEn_yZ7y",
    "Product Image1": "./images/0904DP.png"
  },
  {
    "Item Code": "0905HB",
    "Item Name": "HEAVY BANGLE SIZING MACHINE 25 COLLET",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PH9agp6YLSGfFLHPpXpsEfR4yRLg1WDY",
    "Product Image1": "./images/0905HB.png"
  },
  {
    "Item Code": "0906PB",
    "Item Name": "POLISHING BRUSH 8 ROW",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1EarLhQ9khBdKrBSQ7_Uc2365511T0pZc",
    "Product Image1": "./images/0906PB.png"
  },
  {
    "Item Code": "0907NB",
    "Item Name": "NYLON BRUSH 8 ROW",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pZDRegcZ6rkiMMaIhWhfKB8bF8X6P9Au",
    "Product Image1": "./images/0907NB.png"
  },
  {
    "Item Code": "0908NB",
    "Item Name": "NYLON BRUSH 12 ROW",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uozquHhXEoZUHDays61FughPEbjF4p1X",
    "Product Image1": "./images/0908NB.png"
  },
  {
    "Item Code": "0909BF",
    "Item Name": "BANGLE FLATTERING MACHINE HEAVY MODEL",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aFMnvVnjvGuAm_E0A6oy8snEGaJgp1FO",
    "Product Image1": "./images/0909BF.png"
  },
  {
    "Item Code": "0910BF",
    "Item Name": "BANGLE FLATTERING MACHINE RUNNING MODEL",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1r02EdSdRLCyF8PSAMUS1AXaUX3yz_z6i",
    "Product Image1": "./images/0910BF.png"
  },
  {
    "Item Code": "0911RS",
    "Item Name": "RING SIZING MACHINE 27 COLLET",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1NwBjehShU9lhhEr0djNsgoG1FORfY7Hj",
    "Product Image1": "./images/0911RS.png"
  },
  {
    "Item Code": "0912RE",
    "Item Name": "RING EXPANDING MACHINE",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SavNYJIK0rbULZVmTSC0tdFzFxbu0xQz",
    "Product Image1": "./images/0912RE.png"
  },
  {
    "Item Code": "0913PP",
    "Item Name": "PLASTIC PINVICE CHUCK HANDLE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SrVYRLVzZotFor-mLNYKTK9AhgJcB-cg",
    "Product Image1": "./images/0913PP.png"
  },
  {
    "Item Code": "0914RE",
    "Item Name": "RING EXPANDING MACHINE NO. 1-36",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=18J2fdoZ_42qzymONsaACwR_1mcAzj7nT",
    "Product Image1": "./images/0914RE.png"
  },
  {
    "Item Code": "0915RM",
    "Item Name": "ROLLING MILL 125MM (ITALY TYPE)",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hyI9PnuBUFkGaf5EECO91ddJFltS6hcZ",
    "Product Image1": "./images/0915RM.png"
  },
  {
    "Item Code": "0916KF",
    "Item Name": "5 KG FLOOR MODEL FURNACE",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XP0gMgK5vL3qoIjiLn9JkkkA0xP8-D6H",
    "Product Image1": "./images/0916KF.png"
  },
  {
    "Item Code": "0917KF",
    "Item Name": "10 KG FLOOR MODEL FURNACE",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-pGvxD7t3WNq4KShWicpydr1bfE8Ko3x",
    "Product Image1": "./images/0917KF.png"
  },
  {
    "Item Code": "0918KT",
    "Item Name": "3 KG TABLE MODEL FURNACE",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=12Mf5DMSYQ27UPJofEa8a3gfqFpaYftzt",
    "Product Image1": "./images/0918KT.png"
  },
  {
    "Item Code": "0919KT",
    "Item Name": "5 KG TABLE MODEL FURNACE",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1nNofkT8VMuxkfh42zI99e24LY9fW6J1q",
    "Product Image1": "./images/0919KT.png"
  },
  {
    "Item Code": "0920VP",
    "Item Name": "VIBRATOR POLISHING MACHINE 500GM",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dHLj_Sqtd09lIHK5BkGyOAdXsuXLYVmM",
    "Product Image1": "./images/0920VP.png"
  },
  {
    "Item Code": "0921VB",
    "Item Name": "VIBRATOR POLISHING MACHINE 1KG",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_YqHqWQzcfMslnUiRL2_-quupkpT7Zm9",
    "Product Image1": "./images/0921VB.png"
  },
  {
    "Item Code": "0922VB",
    "Item Name": "VIBRATOR POLISHING MACHINE 2KG",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1GHxfIj4VIunJAjQYRc2ZNdzsGAsScoRS",
    "Product Image1": "./images/0922VB.png"
  },
  {
    "Item Code": "0923VB",
    "Item Name": "VIBRATOR POLISHING MACHINE 3KG",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1x6Yu69lKKVVhG5krRDQGbJ9QulDJ3Igb",
    "Product Image1": "./images/0923VB.png"
  },
  {
    "Item Code": "0924VB",
    "Item Name": "VIBRATOR POLISHING MACHINE 5KG",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Ko47MjH8wIeZmlg6vWI9237BCqyW3kyg",
    "Product Image1": "./images/0924VB.png"
  },
  {
    "Item Code": "0925VB",
    "Item Name": "VIBRATOR POLISHING MACHINE 7KG",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1b0_17y4o6V-pwYZtD_vw_8vxMxW5YjhJ",
    "Product Image1": "./images/0925VB.png"
  },
  {
    "Item Code": "0926AI",
    "Item Name": "A ISI 316 GRADE BALL PIN MIX",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14ruT134iz1D9_6o5RxudkqiBVNzgEUrd",
    "Product Image1": "./images/0926AI.png"
  },
  {
    "Item Code": "0927MD",
    "Item Name": "MEGNATIC DOUBLE POLISH PIN 0.5X5MM- 250 GRAM",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IZD6iVbi5Wij4lZcJYlzQxTdmuivy2zQ",
    "Product Image1": "./images/0927MD.png"
  },
  {
    "Item Code": "0928CR",
    "Item Name": "CRUCIBLE 25 X 25",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hPH6oCC1H7Uv64imWbXKpsB0j0K5eaRk",
    "Product Image1": "./images/0928CR.png"
  },
  {
    "Item Code": "0929CR",
    "Item Name": "CRUCIBLE 45 X 45",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wMmt2QzlV5rIwHRSoZUPtki9D3QX7aqV",
    "Product Image1": "./images/0929CR.png"
  },
  {
    "Item Code": "0930CR",
    "Item Name": "CRUCIBLE 75 X 75",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pxcKsI9wATvd32Mc5Q_EVzsTjg5SK3ik",
    "Product Image1": "./images/0930CR.png"
  },
  {
    "Item Code": "0931CR",
    "Item Name": "CRUCIBLE 75 X 100",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1r9KDqTOAlrRydCaNYD7-wxkO3xzZNy_v",
    "Product Image1": "./images/0931CR.png"
  },
  {
    "Item Code": "0932CR",
    "Item Name": "CRUCIBLE 100 X 100",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=19DkqGgqBGlMFt3riK4qo5VGM95c-3CHy",
    "Product Image1": "./images/0932CR.png"
  },
  {
    "Item Code": "0933CR",
    "Item Name": "CRUCIBLE 60 X 60",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1evfyOfOGypp6knsWxWjC36LABMauuSiq",
    "Product Image1": "./images/0933CR.png"
  },
  {
    "Item Code": "0934CR",
    "Item Name": "CRUCIBLE 65 X 75",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1OTDuYcMgQjXRVUtxl9TwgPwPrKpgfFfr",
    "Product Image1": "./images/0934CR.png"
  },
  {
    "Item Code": "0935CR",
    "Item Name": "CRUCIBLE 70 X 90",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=15lXC0yuL5IDcBLwS3GJPekJDHacz0bi0",
    "Product Image1": "./images/0935CR.png"
  },
  {
    "Item Code": "0936CR",
    "Item Name": "CARBON ROD 12",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sj1f-OrhNqG_ym5q1QrrEkLs65wIz-JN",
    "Product Image1": "./images/0936CR.png"
  },
  {
    "Item Code": "0937CR",
    "Item Name": "CARBON ROD 16",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DWiug6hbzSEUs_OSn8sea9AgLKWGExzS",
    "Product Image1": "./images/0937CR.png"
  },
  {
    "Item Code": "0938CS",
    "Item Name": "CEMENT SHEET (12X12X10 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Jdu0Ir2lSRmTHlcOuBOBA7BAyOpX0luB",
    "Product Image1": "./images/0938CS.png"
  },
  {
    "Item Code": "0939RP",
    "Item Name": "ROLL PRESS MACHINE 4/"/"X2.25/"/"DOUBLE HEAD",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=19T9x_g5l2adDOeatFaAIOJKJnNIPChLg",
    "Product Image1": "./images/0939RP.png"
  },
  {
    "Item Code": "0940RP",
    "Item Name": "ROLL PRESS MACHINE SINGLE HEAD GEARBOX",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=12w8fd3YvK577uvBd_qrxrK5FH3z1A5CP",
    "Product Image1": "./images/0940RP.png"
  },
  {
    "Item Code": "0941CB",
    "Item Name": "CLOTH BOB SPL QTY 6/"/"/60",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1idE7UQF3IcqFRaPfJoIa9iMYGObpwz2u",
    "Product Image1": "./images/0941CB.png"
  },
  {
    "Item Code": "0942PB",
    "Item Name": "POLISHING BRUSH S.U",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1o933l8kG-w8w8FgbUrSo1ABohKt2BnXL",
    "Product Image1": "./images/0942PB.png"
  },
  {
    "Item Code": "0943CB",
    "Item Name": "1C BRUSH",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bG9l81WvvD7pdYn-RY6zMli3mxh3SeaI",
    "Product Image1": "./images/0943CB.png"
  },
  {
    "Item Code": "0944RB",
    "Item Name": "2 ROW BRUSHES",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Ru8Ra8NZiYwyvY_4LFAOazFc6zG9OZqj",
    "Product Image1": "./images/0944RB.png"
  },
  {
    "Item Code": "0945BW",
    "Item Name": "BRSHES & WHEELS",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=167RiC75GXmvdcIgBPk5g5K3AdGGOwjaP",
    "Product Image1": "./images/0945BW.png"
  },
  {
    "Item Code": "0946SP",
    "Item Name": "5-SET POUCH",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jrjzSaA8cJQ9Zof5ha_SqQ1u-Y7CvT0f",
    "Product Image1": "./images/0946SP.png"
  },
  {
    "Item Code": "0947SP",
    "Item Name": "4-SET POUCH",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DmF0u8lx8bGnRQD1WLvmvV_JGAAbSL8Y",
    "Product Image1": "./images/0947SP.png"
  },
  {
    "Item Code": "0948PP",
    "Item Name": "PENDANT POUCH",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jqhhI14Tw_oThepJI-xLBKduh8alarKS",
    "Product Image1": "./images/0948PP.png"
  },
  {
    "Item Code": "0949BP",
    "Item Name": "BRACELET POUCH",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=18zVIJNdS73DXOwK6rCMGgKsFEvzuIL0E",
    "Product Image1": "./images/0949BP.png"
  },
  {
    "Item Code": "0950RP",
    "Item Name": "RING POUCH",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XkO2z1jxYo6ngX4pzvaIBc9YM0m8VNRb",
    "Product Image1": "./images/0950RP.png"
  },
  {
    "Item Code": "0951CP",
    "Item Name": "CHAIN POUCH SMALL",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1V3lSVtQYzTLQGtk0Lc_MCPOFa-PwEUBz",
    "Product Image1": "./images/0951CP.png"
  },
  {
    "Item Code": "0952CP",
    "Item Name": "CHAIN POUCH BIG",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DS2nFVzHFUF2k18HCQBlRArl_lfvm7UD",
    "Product Image1": "./images/0952CP.png"
  },
  {
    "Item Code": "0953BR",
    "Item Name": "BANGLE ROD BIG S.U",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QrqRZpyU7y79-qh6-PSBZnUKTTMSd-gG",
    "Product Image1": "./images/0953BR.png"
  },
  {
    "Item Code": "0954BR",
    "Item Name": "BANGLE ROD SMALL S.U",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1V_x71J3Y0CllpiIDDLHPxC95ZPz8rcma",
    "Product Image1": "./images/0954BR.png"
  },
  {
    "Item Code": "0955BP",
    "Item Name": "BANGLE POUCH ZIP",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zPpntH_VZGZEARrdA_a5o_FWcQLiHatq",
    "Product Image1": "./images/0955BP.png"
  },
  {
    "Item Code": "0956EP",
    "Item Name": "EARING POUCH",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1OiPs6lZpTKbkshKJRg3UGsXYuZYbsyc3",
    "Product Image1": "./images/0956EP.png"
  },
  {
    "Item Code": "0957MP",
    "Item Name": "MIX POUCH-A BIG",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Up1XWeL4lGECzGbQo2X42FKHi-ZytO-C",
    "Product Image1": "./images/0957MP.png"
  },
  {
    "Item Code": "0958MP",
    "Item Name": "MIX POUCH-B SMALL",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yctJXluTbdWIa9mhisOntLTiHJowVvKo",
    "Product Image1": "./images/0958MP.png"
  },
  {
    "Item Code": "0959LO",
    "Item Name": "LUXOR ORANGE",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iIsRyR4CoErfEktkCGCcMjF0KQK5R0DV",
    "Product Image1": "./images/0959LO.png"
  },
  {
    "Item Code": "0960LY",
    "Item Name": "LUXOR YELLOW",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12Hl_qqXsD2-QbXQ2Nk3-3oaPCVNX3DyG",
    "Product Image1": "./images/0960LY.png"
  },
  {
    "Item Code": "0961CL",
    "Item Name": "CANNING LUSTRE NST",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1W9MUpw2brXJ39Pxwcl4K5fkU2sbBeRnk",
    "Product Image1": "./images/0961CL.png"
  },
  {
    "Item Code": "0962DR",
    "Item Name": "DIALUX RED NST",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zo93Rqiob_i08ue-Yc2786DBToCXfivC",
    "Product Image1": "./images/0962DR.png"
  },
  {
    "Item Code": "0963DG",
    "Item Name": "DIALUX GREEN  NST",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1snKzujwtHg9ZBlnSb_DG9A-8N-sI7h-l",
    "Product Image1": "./images/0963DG.png"
  },
  {
    "Item Code": "0964DW",
    "Item Name": "DIALUX WHITE NST",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=11TgVwXVFjbPG7nbakfcv5v1S5laMSPi2",
    "Product Image1": "./images/0964DW.png"
  },
  {
    "Item Code": "0965BL",
    "Item Name": "BLACK LUSTER HP",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=16JBEj73TqOHhbQ9iImTHVHQM3eT45GYv",
    "Product Image1": "./images/0965BL.png"
  },
  {
    "Item Code": "0966RL",
    "Item Name": "RED LUSTER HP",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=199LrRZ9lmrRpf_RI1WrlBAy_YRhrn3Dq",
    "Product Image1": "./images/0966RL.png"
  },
  {
    "Item Code": "0967GM",
    "Item Name": "GOLD MELTING FURNACE MODEL SPB-B1",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=12LpZf4n9YNusyg0KvwTzcArxRtmn4EkL",
    "Product Image1": "./images/0967GM.png"
  },
  {
    "Item Code": "0968GM",
    "Item Name": "GOLD MELTING FURNACE MODEL SPB-B2",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1AbrYfErw_1y1yG73RYQwLaRZsJaI5-k3",
    "Product Image1": "./images/0968GM.png"
  },
  {
    "Item Code": "0969KS",
    "Item Name": "1 KG SILICA CRUCIBLE FOR PLATINUM OR PALLADIUM",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_oksNdb_pFZKozRRKNktlKjMCtKyZAuU",
    "Product Image1": "./images/0969KS.png"
  },
  {
    "Item Code": "0970KS",
    "Item Name": "2 KG SILICA CRUCIBLE FOR PLATINUM OR PALLADIUM",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mWbZ9MtGbJW86KfNwPSCb20gJHtsOWu7",
    "Product Image1": "./images/0970KS.png"
  },
  {
    "Item Code": "0971GC",
    "Item Name": "GRAPHITE CRUCIBLE FOR 12 KG GOLD MELTING",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gALBMOWUHlcITajLwYVciZRWg0dRux_A",
    "Product Image1": "./images/0971GC.png"
  },
  {
    "Item Code": "0972SC",
    "Item Name": "SILICA COAT FOR 12 KG GRAPHITE CRUCIBLE",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=18cvKBXlnMTbrkMbV-h0dGiR_iSQLtJ8X",
    "Product Image1": "./images/0972SC.png"
  },
  {
    "Item Code": "0973GC",
    "Item Name": "GRAPHITE CRUCIBLE FOR 2 KG GOLD MELTING",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_kxZ30suTziBE6wwYHFUxn9N7efNlnQj",
    "Product Image1": "./images/0973GC.png"
  },
  {
    "Item Code": "0974SC",
    "Item Name": "SILICA COAT FOR 2 KG GRAPHITE CRUCIBLE",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xet_pKjubILY0sOOhdLi-_WV7Q--qpWY",
    "Product Image1": "./images/0974SC.png"
  },
  {
    "Item Code": "0975WS",
    "Item Name": "WEIGHT SCALE DJ 3002A GKTLLC",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZaBqq7u9z1PliGSnJo-2aJkfiF37oWdM",
    "Product Image1": "./images/0975WS.png"
  },
  {
    "Item Code": "0976WS",
    "Item Name": "WEIGHT SCALE MEASURMENT TOOLS SETS GKTLLC",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HZX4NUi2GxSf6mUm4L-LBj66VauUGyv9",
    "Product Image1": "./images/0976WS.png"
  },
  {
    "Item Code": "0977EE",
    "Item Name": "ELMASONIC EASY 30H 220-240V ITD",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XmBGARRPNtmT8hu8Hn5bVlH6qzAAq0FA",
    "Product Image1": "./images/0977EE.png"
  },
  {
    "Item Code": "0978EE",
    "Item Name": "ELMASONIC EASY 120H 220-240V ITD",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eX0phvmWAW0_CexXzhwdjSitx9PDmso-",
    "Product Image1": "./images/0978EE.png"
  },
  {
    "Item Code": "0979MB",
    "Item Name": "MODULAR BASKET SIZE 30 ITD",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1OioN4-VP_jQuXzMAXUYjprVMCacT7E6u",
    "Product Image1": "./images/0979MB.png"
  },
  {
    "Item Code": "0980MB",
    "Item Name": "MODULAR BASKET SIZE 120 ITD",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1T6NRdSePxwEmphO6fmQhELwvt4nnGOJl",
    "Product Image1": "./images/0980MB.png"
  },
  {
    "Item Code": "0981BP",
    "Item Name": "BALL POLISHING POWDER 500G NST",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rH0kCBHcDJyNR3LWApzxXEr89z60DFO0",
    "Product Image1": "./images/0981BP.png"
  },
  {
    "Item Code": "0984RM",
    "Item Name": "ROLLING MILL SALEHI 175MM",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Wg-mBcxm5fzGiDn3uC_G1ApTvuFd2eii",
    "Product Image1": "./images/0984RM.png"
  },
  {
    "Item Code": "0982TA",
    "Item Name": "TESTING ACID 21K 18K KJ",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1St6gVY04g7hOjZQ1gzeKKzSWhu5Nh0f2",
    "Product Image1": "./images/0982TA.png"
  },
  {
    "Item Code": "0983TS",
    "Item Name": "TESTING STONE INM",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1b2-z8Nhd0q5nN_9ScPw4SDuUY8GrtsuV",
    "Product Image1": "./images/0983TS.png"
  },
  {
    "Item Code": "0985DB",
    "Item Name": "DOMING BLOCK MIX BRASS (1.5X1.5) 318 GRAM",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ETv1EH-POzYi1fORpnisC8lbeIL840BN",
    "Product Image1": "./images/0985DB.png"
  },
  {
    "Item Code": "0986DB",
    "Item Name": "DOMING BLOCK MIX BRASS (2X2) 850 GRAM",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1403hp4MdKN7dNVFdxRv2YUcN1JIB3x0B",
    "Product Image1": "./images/0986DB.png"
  },
  {
    "Item Code": "0987DB",
    "Item Name": "DOMING BLOCK MIX BRASS (2.5X2.5) 1600 GRAM",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xcjxrRL-DZl6YpyW8yh3Wh4xlAByEUgi",
    "Product Image1": "./images/0987DB.png"
  },
  {
    "Item Code": "0988AS",
    "Item Name": "ANVIL SQUARE (6.5X6.5X7.5) 2460 GRAM",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tWSBf_MRFFHx2tA7In4vMslbgBz_H7bF",
    "Product Image1": "./images/0988AS.png"
  },
  {
    "Item Code": "0989AS",
    "Item Name": "ANVIL SQUARE (7.5 X 7.5 X 9 CM) 3900 GRAM",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_8oGzAhX9d_CAyMsEzHhXN4y-IKt2Tds",
    "Product Image1": "./images/0989AS.png"
  },
  {
    "Item Code": "0990AS",
    "Item Name": "ANVIL SQUARE (9 X 9 X 10 CM) 6100 GRAM",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tVDjYg-5nCPqOa3XqotYMwbeETKTLRet",
    "Product Image1": "./images/0990AS.png"
  },
  {
    "Item Code": "0991AS",
    "Item Name": "ANVIL SQUARE (10 X 10 X 10 CM) 7800 GRAM",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1C_odh_-r0VefHbPKQOT1zvszt8IGPurB",
    "Product Image1": "./images/0991AS.png"
  },
  {
    "Item Code": "0992CS",
    "Item Name": "CEMENT SHEET (12X24X12 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WD63ZPY_LN0ntSxCEwpaeoTfM6lAyClu",
    "Product Image1": "./images/0992CS.png"
  },
  {
    "Item Code": "0993YK",
    "Item Name": "YASUI K2 8KW GRAPHITE CASTING CRUCIBLES HQ",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=13Ci0X5ORLsVNjQqt7XefQq3Ff0bpX-J7",
    "Product Image1": "./images/0993YK.png"
  },
  {
    "Item Code": "0994YK",
    "Item Name": "YASUI K2 8KW GRAPHITE STOPPER CRUCIBLES HQ",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jBkzr4cEJfXRRMlUJzEY1tP12LarXgrz",
    "Product Image1": "./images/0994YK.png"
  },
  {
    "Item Code": "0995YK",
    "Item Name": "YASUI KT 18S GRAPHITE CASTING CRUCIBLES HQ",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YorX5z0dw4hepKDSvfB-L5QqowjO2aFS",
    "Product Image1": "./images/0995YK.png"
  },
  {
    "Item Code": "0996YK",
    "Item Name": "YASUI KT 18S GRAPHITE STOPPER CRUCIBLES HQ",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wdSXTicXSF43xU59NQp_p9t7ISCSxZ0g",
    "Product Image1": "./images/0996YK.png"
  },
  {
    "Item Code": "0997YK",
    "Item Name": "YASUI K2 5 KW GRAPHITE CASTING CRUCIBLE HQ",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1V8cUHDkQoGmGJK3EWVPmxeDsoHw8eyGi",
    "Product Image1": "./images/0997YK.png"
  },
  {
    "Item Code": "0998YK",
    "Item Name": "YASUI K2 5 KW GRAPHITE STOPPER HQ",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1czMagC9hUJrE-7LHB0CJ74fPkTSYTF70",
    "Product Image1": "./images/0998YK.png"
  },
  {
    "Item Code": "0999IV",
    "Item Name": "INDUTHERM VC400/450 GRAPHITE CASTING CRUCIBLE HQ",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=16sKJC0uZ-dmS9J-yM3550GsOMXXUbeCC",
    "Product Image1": "./images/0999IV.png"
  },
  {
    "Item Code": "1000IV",
    "Item Name": "INDUTHERM VC400/450 GRAPHITE STOPPER CRUCIBLE HQ",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WQdkbwKeDaehCBUsr6FN4kzjw9ryIrlY",
    "Product Image1": "./images/1000IV.png"
  },
  {
    "Item Code": "1001IV",
    "Item Name": "INDUTHERM VC600 GRAPHITE CASTING CRUCIBLE HQ",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=119_elUaPVo0e4iQIw7RopuKRIdrogePX",
    "Product Image1": "./images/1001IV.png"
  },
  {
    "Item Code": "1002IV",
    "Item Name": "INDUTHERM VC600 GRAPHITE STOPPER CRUCIBLE HQ",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1b68d6lpAAgKcmqXu9rgIiquH628SEjAV",
    "Product Image1": "./images/1002IV.png"
  },
  {
    "Item Code": "1003KO",
    "Item Name": "KHAR GOTI INDIAN",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17bkEQZty5K5pc7GxbPWWHu1EkAZBbrGy",
    "Product Image1": "./images/1003KO.png"
  },
  {
    "Item Code": "1004RJ",
    "Item Name": "RHODIUM J1",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1g2dzHmSgi47ki2DLNf9SiqopSA_Cqeq0",
    "Product Image1": "./images/1004RJ.png"
  },
  {
    "Item Code": "1005GJ",
    "Item Name": "GLASS JAR LITRE",
    "Category": "PLATING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_8fKRNKgOYbNj1HwULraYaRygP5dexxU",
    "Product Image1": "./images/1005GJ.png"
  },
  {
    "Item Code": "1006GF",
    "Item Name": "GFS-24.20G MAKE-UP SALTS FOR READY TO USE FLASH PLATING BATH 1G/L PURE GOLD COLOR PKG 20G (GFS-24)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1trYHgtUuSk1rFcMr_wxr24WT09CvmXI-",
    "Product Image1": "./images/1006GF.png"
  },
  {
    "Item Code": "1007GF",
    "Item Name": "GF1N.1L READY TO USE FLASH PLATING BATH 0.8G/L GOLD 1N COLOR 1L (GF1N.1L)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KG2w_llxIFD0Lwyu91YoYhdAxAFvsX6d",
    "Product Image1": "./images/1007GF.png"
  },
  {
    "Item Code": "1008GR",
    "Item Name": "GFRED.1L READY TO USE FLASH PLATING BATH 0.8G/L RED GOLD COLOR 1L (GFRED)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1OyD4TqnEDh_5Z5ANtTJ-m7ohbKQ29ONp",
    "Product Image1": "./images/1008GR.png"
  },
  {
    "Item Code": "1009RR",
    "Item Name": "Ruthenium Ready To Use Plating Bath 5g/l Extra-black Color Pkg. 1 l (Ru5black-x)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UQLrCDTOdnGUDKgIz-HecPeJ-Vq0_9MR",
    "Product Image1": "./images/1009RR.png"
  },
  {
    "Item Code": "1010AS",
    "Item Name": "ANNODE SMALL",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1N6GLl5aNblADawah-TWzwlcbqboy-qE_",
    "Product Image1": "./images/1010AS.png"
  },
  {
    "Item Code": "1011DP",
    "Item Name": "DEIARESING PLATE",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vaUfjseGALh8uTWkDab_l-zlohBxYYGy",
    "Product Image1": "./images/1011DP.png"
  },
  {
    "Item Code": "1012GF",
    "Item Name": "READY TO USE FLASH PLATING BATH 0.6G/L PINK GOLD COLOR-PKG 1L (GFPINK)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17czsFQjG1-5bQdAXaF4u9rdTDEvufwcd",
    "Product Image1": "./images/1012GF.png"
  },
  {
    "Item Code": "1013GF",
    "Item Name": "READY TO USE FLASH PLATING BATH 0.8G/L PURE GOLD COLOR- 1L (GF24)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ydiCeV-kH_wPhHr1s-0ulrGCXCE15iDa",
    "Product Image1": "./images/1013GF.png"
  },
  {
    "Item Code": "1014PR",
    "Item Name": "READY TO USE PLATING SOLUTION 2G/L PT+1G/L RU-1L (PTLUX-RTU)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wBGLmNgAWiO15qDrKFEc7BSzl_M60vJl",
    "Product Image1": "./images/1014PR.png"
  },
  {
    "Item Code": "1015RC",
    "Item Name": "RHODIUM CONCENTRATE PLATING BATH 2G/100ML WHITE COLOR-100ML (RH2FW)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-6EpZQWKAB0GLNwZExDxzwTkRT0YzZZ_",
    "Product Image1": "./images/1015RC.png"
  },
  {
    "Item Code": "1016RP",
    "Item Name": "RHODIUM PEN PLATING SOLUTION 2G/100ML SUPER WHITE COLOR- PKG 100ML (RH2PS)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XLl9yyWl7POnUzAI73QCJps8njsUgZSB",
    "Product Image1": "./images/1016RP.png"
  },
  {
    "Item Code": "1017MU",
    "Item Name": "MAKE-UP SALTS FOR READY TO USE FLASH PLATING BATH 1G/L PINK GOLD COLOR-PKG 20G (GFS-RED)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yEhiNpZGV96L-EsEdXL9oNALRh6cu0NF",
    "Product Image1": "./images/1017MU.png"
  },
  {
    "Item Code": "1018ED",
    "Item Name": "ELECTROLYTIC DEGREASING POWDER- 1KG (SGR1P)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CAz78bh45s9Xa6psXUZaydqhVbdNJ5oF",
    "Product Image1": "./images/1018ED.png"
  },
  {
    "Item Code": "1019GP",
    "Item Name": "READY TO USE GOLD PEN PLATING SOLUTION 2G/100ML PURE GOLD COLOR-100ML (GY2P)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17rGsxa-o9T2-J7cJnkwX6SL0hjrWA4tM",
    "Product Image1": "./images/1019GP.png"
  },
  {
    "Item Code": "1020GP",
    "Item Name": "READY TO USE GOLD PEN SOLUTION 0.4G/100ML PINK GOLD COLOR-100ML (GP03P)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RD3JZf_5NrdOXW0FmwVsIrm2UF0xivKQ",
    "Product Image1": "./images/1020GP.png"
  },
  {
    "Item Code": "1021EB",
    "Item Name": "ELECTRONICS BALANCE HT-500",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WEAbnz-Ye6-p_21LunLdF6f9Lc37m-yQ",
    "Product Image1": "./images/1021EB.png"
  },
  {
    "Item Code": "1022EB",
    "Item Name": "ELECTRONICS BALANCE HT-2000",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tFgK5cwXSkc-YkTks_k676FHRZA7TWs0",
    "Product Image1": "./images/1022EB.png"
  },
  {
    "Item Code": "1023CP",
    "Item Name": "CRUCIBLE POLISHED 100 X 100",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1K-mCnQRChxvyW4GkUypTTfTZTIsYHotj",
    "Product Image1": "./images/1023CP.png"
  },
  {
    "Item Code": "1024CP",
    "Item Name": "CRUCIBLE POLISHED 75 X 100",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eiBlks2gqEnYL4TtIKokyKBYG8W-X8_7",
    "Product Image1": "./images/1024CP.png"
  },
  {
    "Item Code": "1025CP",
    "Item Name": "CRUCIBLE POLISHED 60 X 60",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tW8GxSUmoG9rhmJcmo2Cye6Snb86tQT-",
    "Product Image1": "./images/1025CP.png"
  },
  {
    "Item Code": "1026CP",
    "Item Name": "CRUCIBLE POLISHED 75 X 75",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1swCI5INrJhjUKg9nz1mnINzmSQT4Wxrw",
    "Product Image1": "./images/1026CP.png"
  },
  {
    "Item Code": "1027CP",
    "Item Name": "CRUCIBLE POLISHED 65 X 75",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UmOPmDaHpECxQKERciRhJ9vNz8YBjEeo",
    "Product Image1": "./images/1027CP.png"
  },
  {
    "Item Code": "1028NY",
    "Item Name": "4/"/" NIPPER YAMATO",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Yixn1P1YxQB_AYT8kM3kFEdo3Iz5Al8Y",
    "Product Image1": "./images/1028NY.png"
  },
  {
    "Item Code": "1029CP",
    "Item Name": "CRUCIBLE POLISHED 45 X 45",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1k3kZPA550B8UdEzx_Fts-TFlF07lOhjC",
    "Product Image1": "./images/1029CP.png"
  },
  {
    "Item Code": "1030CP",
    "Item Name": "CRUCIBLE POLISHED 70 X 90",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RC13Z0Exddm8TPNdZDgwZqI-1JAL3KKs",
    "Product Image1": "./images/1030CP.png"
  },
  {
    "Item Code": "1031AF",
    "Item Name": "AJANTA FOOT RULER 60CM",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZxwlzMSgRiMpYcZtyypQNlG8-pjzTufP",
    "Product Image1": "./images/1031AF.png"
  },
  {
    "Item Code": "1032RP",
    "Item Name": "RHODIUM PLATING NIB – DOUBLE SIDED",
    "Category": "PLATING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LNSLt7HRYLkxXU1UFR_XGbPxTSaW4Q3e",
    "Product Image1": "./images/1032RP.png"
  },
  {
    "Item Code": "1033RP",
    "Item Name": "RHODIUM PLATING NIB FOR PEN – BROWN",
    "Category": "PLATING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FsmKerKD04s6DlRUrZiPfOTSgI3CHDZt",
    "Product Image1": "./images/1033RP.png"
  },
  {
    "Item Code": "1034CU",
    "Item Name": "CUTTER 8",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1y3aztPF_B6X3aePRRmPE3dFObH23EYzq",
    "Product Image1": "./images/1034CU.png"
  },
  {
    "Item Code": "1035CU",
    "Item Name": "CUTTER 10",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=116Z2gueYlvT-kZsVOCjR4GtAsBwnPYR3",
    "Product Image1": "./images/1035CU.png"
  },
  {
    "Item Code": "1036MC",
    "Item Name": "MAP CUTTER 4 NO",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1otSjzTJmSgPpq2iFEc-NFwSXerQEsp_I",
    "Product Image1": "./images/1036MC.png"
  },
  {
    "Item Code": "1037CM",
    "Item Name": "CUTTER M.D.HASAN",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1L7Ln4lvMkQv0WD1ReGP9CMfMtI1RvhOS",
    "Product Image1": "./images/1037CM.png"
  },
  {
    "Item Code": "1038CN",
    "Item Name": "CHAIN NOSE PLIER BOX JOINT V SPRING ( RED SLEEVES ) SERRATED",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FJ7kg1qOT9y4hnyw5AHmsg593RgPuXT4",
    "Product Image1": "./images/1038CN.png"
  },
  {
    "Item Code": "1039CK",
    "Item Name": "CUTTER KABUTARI",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YF6d7BYUi6kI0V-2Oa2lohG0x5R1KVwV",
    "Product Image1": "./images/1039CK.png"
  },
  {
    "Item Code": "1040CS",
    "Item Name": "CUTTER SARVOTTAM",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VAXmMhvFkCAJSvjMdbNWtzE8CHIRG4NJ",
    "Product Image1": "./images/1040CS.png"
  },
  {
    "Item Code": "1041CH",
    "Item Name": "CUTTER HEAVY SHALIMAR",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1NqErTMN0_GEDlIiFZV48TujUXJAaCS7M",
    "Product Image1": "./images/1041CH.png"
  },
  {
    "Item Code": "1042CT",
    "Item Name": "CUTTER TALWAR ½ NO RED",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Vc9IbihCfeK6tpqiy4wh9kq2bbHD51RD",
    "Product Image1": "./images/1042CT.png"
  },
  {
    "Item Code": "1043MC",
    "Item Name": "MAP CUTTER 2 NO",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yf_Ys5aqO4BSTeKpmgOf3uUq0xquzUMS",
    "Product Image1": "./images/1043MC.png"
  },
  {
    "Item Code": "1044WR",
    "Item Name": "WOODEN RING CLAMP WITH WEDGE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xgt4IDQ79FCiuWa_h2JEhSanLxUQIPkn",
    "Product Image1": "./images/1044WR.png"
  },
  {
    "Item Code": "1045FN",
    "Item Name": "FLY NUT RING CLAMP",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vJ4r6Rczrzly5uTvQRgmrq8H-O4Wp4bK",
    "Product Image1": "./images/1045FN.png"
  },
  {
    "Item Code": "1046FK",
    "Item Name": "FELT KNIFE EDGE WHEEL 3",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TICHaS2QUibyVfd9irqwPPIf2WfrujqE",
    "Product Image1": "./images/1046FK.png"
  },
  {
    "Item Code": "1047FK",
    "Item Name": "FELT KNIFE EDGE WHEEL 4",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bEKHXD7s1WWM7KO3yyz0QxL7wE2Q4Alp",
    "Product Image1": "./images/1047FK.png"
  },
  {
    "Item Code": "1048FW",
    "Item Name": "FELT WHEEL 2 X 12MM",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IkuwlYM2k7wdILurkfvNo1JvfiN4RUNK",
    "Product Image1": "./images/1048FW.png"
  },
  {
    "Item Code": "1049FW",
    "Item Name": "FELT WHEEL 4 X ½",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gfIfK9xNzq9vsopbMSQBP-L2uHXe6mdk",
    "Product Image1": "./images/1049FW.png"
  },
  {
    "Item Code": "1050PJ",
    "Item Name": "PARALLEL JAW RING CLAMP",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CZZryd4xt8Zrs8f3DpwSl8ym_Sh7jHMD",
    "Product Image1": "./images/1050PJ.png"
  },
  {
    "Item Code": "1051BD",
    "Item Name": "BLACK DIAMOND SHOVEL SQUARE NO 4",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DxnZKhRM0oEu_4nKowFCxW_q9Z8YrcEB",
    "Product Image1": "./images/1051BD.png"
  },
  {
    "Item Code": "1052BD",
    "Item Name": "BLACK DIAMOND SHOVEL SQUARE NO 5",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17UBdKbPs8Ec6p9oF7M4P92qaz5pZT4v7",
    "Product Image1": "./images/1052BD.png"
  },
  {
    "Item Code": "1053WG",
    "Item Name": "WIRE GAUGE KRISTEEL",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xPPuMXcjVIslDy_SPXz0uG1dEIJevEgg",
    "Product Image1": "./images/1053WG.png"
  },
  {
    "Item Code": "1054CH",
    "Item Name": "CUTTER HEAVY POLISH 8",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=10UH8_wrshdNtfS5tt4C85S3KThc35bRU",
    "Product Image1": "./images/1054CH.png"
  },
  {
    "Item Code": "1055CH",
    "Item Name": "CUTTER HEAVY FILE 8",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=19C2G3hrPOP_ChqwZ7jmk82f0doIe5M2r",
    "Product Image1": "./images/1055CH.png"
  },
  {
    "Item Code": "1056CG",
    "Item Name": "CUTTER GAJRA FILE 00",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RR_KjIRC6aAUHth8PH7-oROQDtiyZcbw",
    "Product Image1": "./images/1056CG.png"
  },
  {
    "Item Code": "1057CG",
    "Item Name": "CUTTER GAJRA FILE 0",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FmpWPI6EowpIu-QXJd9xK1usLPhivkC8",
    "Product Image1": "./images/1057CG.png"
  },
  {
    "Item Code": "1058CG",
    "Item Name": "CUTTER GAJRA FULL FILE",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13G4j96iYs1uhGw13gD4jhsGZna0ue7kd",
    "Product Image1": "./images/1058CG.png"
  },
  {
    "Item Code": "1059PH",
    "Item Name": "PIN HOLE PLIER ECONOMY",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rEnm15fH7krTanvc4iEp2OuE3KMAvB7M",
    "Product Image1": "./images/1059PH.png"
  },
  {
    "Item Code": "1060LS",
    "Item Name": "LOKHAND SAMANA 3 NO",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZkgfB2xO_kqLFwm9eEjmwP5exVZHJJvu",
    "Product Image1": "./images/1060LS.png"
  },
  {
    "Item Code": "1061LS",
    "Item Name": "LOKHAND SAMANA 4 NO",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Y36XZRZamFiMo7l_KLhGnOzPGVw531hU",
    "Product Image1": "./images/1061LS.png"
  },
  {
    "Item Code": "1062PP",
    "Item Name": "POLISHING PAPER ( 400, 600 )",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1reCnciLLcTU9lLuwwilQyIYLn5AltRyj",
    "Product Image1": "./images/1062PP.png"
  },
  {
    "Item Code": "1063PP",
    "Item Name": "POLISHING PAPER ( 800, 1000 )",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1AxpHHUHpQ7qqkqJoJYx2YR_hXTo2N4RV",
    "Product Image1": "./images/1063PP.png"
  },
  {
    "Item Code": "1064PP",
    "Item Name": "POLISHING PAPER ( 1200, 1500 AND 2000 )",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FJpDtya8ghVfNxMbkn7blYZNr85ItqYB",
    "Product Image1": "./images/1064PP.png"
  },
  {
    "Item Code": "1065WF",
    "Item Name": "WOODEN FILE HANDLE 4",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bgVdjPZqNPtgXBwEJKgAqFlPqDUXEcLN",
    "Product Image1": "./images/1065WF.png"
  },
  {
    "Item Code": "1066SS",
    "Item Name": "SANSI SURTI FILE 9",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XXThEKlAzLn8sxyplU97jkO24LgEdQjJ",
    "Product Image1": "./images/1066SS.png"
  },
  {
    "Item Code": "1067AN",
    "Item Name": "AMBUDI NO 4 WITH STEEL POLISH",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PbHihdfDIsTVT6iaK7TymvgcthFVTDLt",
    "Product Image1": "./images/1067AN.png"
  },
  {
    "Item Code": "1068BR",
    "Item Name": "BRUSH 12 ROW HARD",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iY01hmAeEfiLyYAyRsdVCKXHhZVtnOxb",
    "Product Image1": "./images/1068BR.png"
  },
  {
    "Item Code": "1069SP",
    "Item Name": "SCREW PLATE 6 HOLE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=18df5a_RIV2uBGyVu9eJvyNCxnRNJ-K5E",
    "Product Image1": "./images/1069SP.png"
  },
  {
    "Item Code": "1070SP",
    "Item Name": "SCREW PLATE 7 HOLE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1b1kWx7oXS1dny0Y7MCUhOi-vZei4HsUv",
    "Product Image1": "./images/1070SP.png"
  },
  {
    "Item Code": "1071SP",
    "Item Name": "SCREW PLATE 8 HOLE",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-nbxUgnxXThfvnjWrfORbSZ8EpLTK9iM",
    "Product Image1": "./images/1071SP.png"
  },
  {
    "Item Code": "1072BR",
    "Item Name": "BRUSH 14 ROW HARD",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1oHvUFxUleo37FiaOoEW7n9PoMS3vTZfN",
    "Product Image1": "./images/1072BR.png"
  },
  {
    "Item Code": "1073BR",
    "Item Name": "BRUSH 16 ROW HARD",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1d_nibVbJiN7gii99iUbDZMYW5yhoSop-",
    "Product Image1": "./images/1073BR.png"
  },
  {
    "Item Code": "1074BR",
    "Item Name": "BRUSH 8 ROW",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TNfH7xboEJImMUonhzns9R7xDFwtUVbv",
    "Product Image1": "./images/1074BR.png"
  },
  {
    "Item Code": "1075TW",
    "Item Name": "TRAY WOODEN 10 X 13",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TzPyj4WteJn6VQ2_diCD66him8Gx3eXA",
    "Product Image1": "./images/1075TW.png"
  },
  {
    "Item Code": "1076TW",
    "Item Name": "TRAY WOODEN 12 X 15",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VhebDUSOnRcFBeTuGDOvIYh5Q1144EiS",
    "Product Image1": "./images/1076TW.png"
  },
  {
    "Item Code": "1077TW",
    "Item Name": "TRAY WOODEN 9 X 12",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VhBAvzQLmwO_ibrbOPmEqg7fY9bAvfDv",
    "Product Image1": "./images/1077TW.png"
  },
  {
    "Item Code": "1078BR",
    "Item Name": "BRUSH 6 ROW",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iAOzIYduvKZ02kxBe48ieldDIIa8ZZnb",
    "Product Image1": "./images/1078BR.png"
  },
  {
    "Item Code": "1079SF",
    "Item Name": "SAW FRAME BLADES – DIAMOND",
    "Category": "SAW BLADES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HObIlOALrMDtu1LozzqJTnGUFNFjj0h8",
    "Product Image1": "./images/1079SF.png"
  },
  {
    "Item Code": "1080SF",
    "Item Name": "SAW FRAME BLADES - LAXMI",
    "Category": "SAW BLADES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tMFytz5cOzd-lwv9gPWa1gZkpK8Xe5rQ",
    "Product Image1": "./images/1080SF.png"
  },
  {
    "Item Code": "1081PP",
    "Item Name": "POLISHING PAPER ( 320 )",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=19CfeRkTyDngUcoCx6M7xbtJA5-TTLfFp",
    "Product Image1": "./images/1081PP.png"
  },
  {
    "Item Code": "1082PP",
    "Item Name": "POLISHING PAPER ( 220 ) – APPLE",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KycJrmUwymxnGz3ZJgjd_Rc6j6uB4c1P",
    "Product Image1": "./images/1082PP.png"
  },
  {
    "Item Code": "1083PP",
    "Item Name": "POLISHING PAPER ( 220 ) – JOHN",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ihKldLYM9-0_O7ffOkLFOI-PS7bSSu6y",
    "Product Image1": "./images/1083PP.png"
  },
  {
    "Item Code": "1084BP",
    "Item Name": "BENCH PIN WITH V SLOT",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-9hnXjNyK-Hw6yw5n9oPXjOUzZPz7TxA",
    "Product Image1": "./images/1084BP.png"
  },
  {
    "Item Code": "1085RM",
    "Item Name": "ROUND MAGNET 2",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=19OofICjmkJHBCpJOxj8yOjNTgs4LtyV4",
    "Product Image1": "./images/1085RM.png"
  },
  {
    "Item Code": "1086LM",
    "Item Name": "LOOPE 10X 18MM WITH COVER",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1opUbzIeBtFGIRiIxh4h5rWMzRr3MFcrl",
    "Product Image1": "./images/1086LM.png"
  },
  {
    "Item Code": "1087WD",
    "Item Name": "WOODEN DOMING BLOCK WITH 2 PUNCH",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1r362yULE7HXodgv8uwzG2VWfLzntMDtE",
    "Product Image1": "./images/1087WD.png"
  },
  {
    "Item Code": "1088BR",
    "Item Name": "BRUSH 03 ROWS SOFT",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mpRi3fVmc47WN2-RHboB-8SH_f70gvaD",
    "Product Image1": "./images/1088BR.png"
  },
  {
    "Item Code": "1089PP",
    "Item Name": "POLISHING PAPER ( 220 )",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fFvc1ThKTadyUmml-LmwZn9_9e1OxszN",
    "Product Image1": "./images/1089PP.png"
  },
  {
    "Item Code": "1090SP",
    "Item Name": "SIA PAPER (400/600)",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1x-ML8i77ipH6IrOu6AJ3YAbskJ2-NvMM",
    "Product Image1": "./images/1090SP.png"
  },
  {
    "Item Code": "1091SP",
    "Item Name": "SIA PAPER (800/1000)",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=107eOZpd9LGsgWduxH-KBjSVSF85v1fxV",
    "Product Image1": "./images/1091SP.png"
  },
  {
    "Item Code": "1092SP",
    "Item Name": "SIA PAPER (1200/2000)",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1u7KW3vkvuCH--8DLqLRENKiQ-LWAbeEz",
    "Product Image1": "./images/1092SP.png"
  },
  {
    "Item Code": "1093EP",
    "Item Name": "EMERY PAPER",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17mFvrUS7C0WLmLc0XYDibitaWfc6tqfP",
    "Product Image1": "./images/1093EP.png"
  },
  {
    "Item Code": "1094RA",
    "Item Name": "ROUND ANVIL",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12zgN0zTPNLeFLwDBO6myqnkrvCWMdIe1",
    "Product Image1": "./images/1094RA.png"
  },
  {
    "Item Code": "1095BV",
    "Item Name": "BABY VICE 50MM",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mcPCarYBC6kzzl_Kgw_YfqKhqjQcuAKl",
    "Product Image1": "./images/1095BV.png"
  },
  {
    "Item Code": "1096BV",
    "Item Name": "BABY VICE 60MM",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13zOJqrGtGPRzw55q8GREczFGWvs5VBS7",
    "Product Image1": "./images/1096BV.png"
  },
  {
    "Item Code": "1097BV",
    "Item Name": "BABY VICE 70MM",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Ze-LTzfNBbxK1qfcSINkUt8LP8jTmHMK",
    "Product Image1": "./images/1097BV.png"
  },
  {
    "Item Code": "1098FN",
    "Item Name": "FIBER NECK SMALL",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vqYzRnoul1pras3BMev7w4RgqNZ7_0ZF",
    "Product Image1": "./images/1098FN.png"
  },
  {
    "Item Code": "1099FN",
    "Item Name": "FIBER NECK BIG",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RSe0Glo_obigBH7d5VFdZ-1ajKajpTGQ",
    "Product Image1": "./images/1099FN.png"
  },
  {
    "Item Code": "1100UH",
    "Item Name": "ULTRASONIC 12 HOOK RACK",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rtJiAp_-M4qRAMbVPGhY-RpK68j943LM",
    "Product Image1": "./images/1100UH.png"
  },
  {
    "Item Code": "1101UL",
    "Item Name": "ULTRASONIC 16 LEGS RACK",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tHpEGTg7jxzas5rWhW4PdTE1Px_id7Xh",
    "Product Image1": "./images/1101UL.png"
  },
  {
    "Item Code": "1102RE",
    "Item Name": "RING EXPANDING M/C. 1 TO 36 ITALY TYPE",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1NaPxWhcKrkfH_n07iCtnlQt-2tmHFTZt",
    "Product Image1": "./images/1102RE.png"
  },
  {
    "Item Code": "1103SD",
    "Item Name": "1 SQUARE DAPPING BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tx-rm8rDXPFHrIEx49i2ALCzLLYCcvoi",
    "Product Image1": "./images/1103SD.png"
  },
  {
    "Item Code": "1104SD",
    "Item Name": "2 SQUARE DAPPING BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XOMLJlWhewpAQlJfUpeTBXhJhq0vM93m",
    "Product Image1": "./images/1104SD.png"
  },
  {
    "Item Code": "1105SD",
    "Item Name": "2 1/2 SQUARE DAPPING BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pHwG3Xk_9PQKjeNI71WuUmsSZe70QaNP",
    "Product Image1": "./images/1105SD.png"
  },
  {
    "Item Code": "1106SD",
    "Item Name": "2 3/4 SQUARE DAPPING BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ULVTfSa3yL3R7u7KgOBReSJQjbKjrK1o",
    "Product Image1": "./images/1106SD.png"
  },
  {
    "Item Code": "1107SD",
    "Item Name": "1 1/2  SQUARE DAPPING BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gc69GVrx-WN3SK1Zgg_3xbc_s6mq9iz5",
    "Product Image1": "./images/1107SD.png"
  },
  {
    "Item Code": "1108SB",
    "Item Name": "2 X 2 X 3 SWAGE BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IXXju8HCLrpTNDanCU3qgenQ2GVME4Gv",
    "Product Image1": "./images/1108SB.png"
  },
  {
    "Item Code": "1109SB",
    "Item Name": "2 1/2 SWAGE BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1D2TvoZnVbh3m3MDb0djuVnhbhlZPAbaa",
    "Product Image1": "./images/1109SB.png"
  },
  {
    "Item Code": "1110FD",
    "Item Name": "2 FANCY DAPPING BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TIp6NSxF9YYuWqQHqPH6dJx5D16orpP5",
    "Product Image1": "./images/1110FD.png"
  },
  {
    "Item Code": "1111FD",
    "Item Name": "2 1/2 FANCY DAPPING BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Nl4OUdj9wUvyRfm7b3gOaaJahFFPNQcN",
    "Product Image1": "./images/1111FD.png"
  },
  {
    "Item Code": "1112DP",
    "Item Name": "12 PCS DAPPING PUNCH SET",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1M6tYRNZdScxEiQDdkFuuVZFtxOY9F_dg",
    "Product Image1": "./images/1112DP.png"
  },
  {
    "Item Code": "1113DP",
    "Item Name": "24 DAPPING PUNCH SET",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14b6oCSUDf6z1VzcYJVdBkjThW6kT2y-0",
    "Product Image1": "./images/1113DP.png"
  },
  {
    "Item Code": "1114DP",
    "Item Name": "18 DAPPING PUNCH SET",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mklvsBJrfPN-G6ag50nzTdHKpNUza_hA",
    "Product Image1": "./images/1114DP.png"
  },
  {
    "Item Code": "1115DP",
    "Item Name": "36 DAPPING PUNCH SET",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_F235B9H85jeQOI6SXm-eqPT0idogzcB",
    "Product Image1": "./images/1115DP.png"
  },
  {
    "Item Code": "1116BB",
    "Item Name": "3 X 3 X 1 BENCH BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LExITP9RUHeM9qDz3vd9jBq4TSaLhl8X",
    "Product Image1": "./images/1116BB.png"
  },
  {
    "Item Code": "1117BB",
    "Item Name": "4 X 4 X 0.75 BENCH BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PPBG5Gdv5LdqdXBoPApDCECAJcpFib2_",
    "Product Image1": "./images/1117BB.png"
  },
  {
    "Item Code": "1118BB",
    "Item Name": "6 X 4 X 3/4 BENCH BLOCK",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Cp7UV74yfFQAp7_WmMyj5Kce3YPQ-Axh",
    "Product Image1": "./images/1118BB.png"
  },
  {
    "Item Code": "1119SI",
    "Item Name": "SQUARE INGOT MOULD FOR WIRE 10",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZyaMgeFc7ZNeMDKhcs7Zw3EwhHZOl-jO",
    "Product Image1": "./images/1119SI.png"
  },
  {
    "Item Code": "1120SI",
    "Item Name": "SQUARE INGOT MOULD FOR WIRE 12",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CZ3ZaqCwEad32xpZc-2E2fD0W6NC-QMz",
    "Product Image1": "./images/1120SI.png"
  },
  {
    "Item Code": "1121SI",
    "Item Name": "SQUARE INGOT MOULD FOR WIRE 15",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lfxF6EHPHISVcnJnYJF2CRPj-mm6sFgc",
    "Product Image1": "./images/1121SI.png"
  },
  {
    "Item Code": "1122SI",
    "Item Name": "SQUARE INGOT MOULD FOR WIRE 18",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eaDoSkbz_lWn0iuza681GIaWNzjBdZ2D",
    "Product Image1": "./images/1122SI.png"
  },
  {
    "Item Code": "1123SI",
    "Item Name": "SQUARE INGOT MOULD FOR WIRE 24",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1y8k17sUtz5MwQbxdqekTaqefsLCA8jli",
    "Product Image1": "./images/1123SI.png"
  },
  {
    "Item Code": "1124VI",
    "Item Name": "VERTICLE INGOT MOULD – NO – 02",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kmu9tnDW_-x03nvfRp0QhTaUeV48FgUx",
    "Product Image1": "./images/1124VI.png"
  },
  {
    "Item Code": "1125VI",
    "Item Name": "VERTICLE INGOT MOULD – NO – 03",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Ub0F-t4UPDQQt7fdIQ9NUwH7qSTMpKvA",
    "Product Image1": "./images/1125VI.png"
  },
  {
    "Item Code": "1126VI",
    "Item Name": "VERTICLE INGOT MOULD – NO – 04",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sCjfJgSTf9qILWW1kJ7mtvFVI8yBDFfV",
    "Product Image1": "./images/1126VI.png"
  },
  {
    "Item Code": "1127VI",
    "Item Name": "VERTICLE INGOT MOULD – NO – 05",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=151iN2dDhIQ8Ck2Wra20gPY_7YNpFQPFg",
    "Product Image1": "./images/1127VI.png"
  },
  {
    "Item Code": "1128VI",
    "Item Name": "VERTICLE INGOT MOULD – NO – 06",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14IhX-mtaoeBmA497Hl6dieMkQ_oO9FYo",
    "Product Image1": "./images/1128VI.png"
  },
  {
    "Item Code": "1129CS",
    "Item Name": "CEMENT SHEET",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IBWsp-kFX3TkT7bliNoLGWNWXbmT5e2b",
    "Product Image1": "./images/1129CS.png"
  },
  {
    "Item Code": "1130BW",
    "Item Name": "BUFFING WHEEL WP 1 1/2/"/" X 2",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=14mq80pQtwRCbStln9cchL6RZEvCWUFa4",
    "Product Image1": "./images/1130BW.png"
  },
  {
    "Item Code": "1131BW",
    "Item Name": "BUFFING WHEEL WP 1 3/4 X 2",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eeKAAtsNSVkWv7FkTFMkRZvf5LIuZBy1",
    "Product Image1": "./images/1131BW.png"
  },
  {
    "Item Code": "1132NS",
    "Item Name": "NYLON SPINDLE",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ivADlZwCOTm1twGhC9Ly714ft_eekBN_",
    "Product Image1": "./images/1132NS.png"
  },
  {
    "Item Code": "1133BS",
    "Item Name": "BURNISHER STEEL",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1txeiY68iedxGj8F-z45VQpFYpytk37OS",
    "Product Image1": "./images/1133BS.png"
  },
  {
    "Item Code": "1134HD",
    "Item Name": "HSS DRILL BITS ( 0.5MM TO 1MM )",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Dt6mlAFEFhuL8cCNgUOHcDkronP2_j4e",
    "Product Image1": "./images/1134HD.png"
  },
  {
    "Item Code": "1135DB",
    "Item Name": "DRILL BITS (1.1, 1.2, 1.3, 1.4, 1.5)",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1is1cZ7IzPyMQEabG5iFKmEXU9WaZ4njv",
    "Product Image1": "./images/1135DB.png"
  },
  {
    "Item Code": "1136BW",
    "Item Name": "BUFFING WHEEL WP 1 X 1 1/2",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=13MGXj32iHfloYMASBPSjFB6IUoxoesp1",
    "Product Image1": "./images/1136BW.png"
  },
  {
    "Item Code": "1137BW",
    "Item Name": "BUFFING WHEEL WP 1 1/4 X 2",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-EJTbymKTISr8w-DXMayNcimnWQPYRMz",
    "Product Image1": "./images/1137BW.png"
  },
  {
    "Item Code": "1138VI",
    "Item Name": "VERTICLE INGOT MOULD - NO – 08",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rYXeBaIz02iblAAqxPUhc6awRHKWhKrD",
    "Product Image1": "./images/1138VI.png"
  },
  {
    "Item Code": "1139BS",
    "Item Name": "BRUSH 2",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fKmVxy-B4KpkFugw-iJh5V6pwbqSFoWg",
    "Product Image1": "./images/1139BS.png"
  },
  {
    "Item Code": "1140BS",
    "Item Name": "BRUSH 1.5",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1g-GMsc35-c9ZjRQ1bxkMRKxwtV6YzmkS",
    "Product Image1": "./images/1140BS.png"
  },
  {
    "Item Code": "1141BS",
    "Item Name": "BRUSH 3",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1B4fx_GquMg3ykK4qAuFxl1jm-27X3aDY",
    "Product Image1": "./images/1141BS.png"
  },
  {
    "Item Code": "1142MP",
    "Item Name": "MAGNET P 50 X 25 X 12.5",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IHAN9CHEoMXJ12KMTuodz5DgIOKjKuL7",
    "Product Image1": "./images/1142MP.png"
  },
  {
    "Item Code": "1143BS",
    "Item Name": "BRUSH 1",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1EqWMN6kWbs_AeYi91OGfycNq7CgTCFfy",
    "Product Image1": "./images/1143BS.png"
  },
  {
    "Item Code": "1144BS",
    "Item Name": "BRUSH 2.5",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1eVq5pGEChLssmHqkUrbmBIk8Iv5AwAjD",
    "Product Image1": "./images/1144BS.png"
  },
  {
    "Item Code": "1145MP",
    "Item Name": "MEGNATIC POLISH PIN 0.5 X 5 MM ( PREMIUM )",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IRz1nJnjFOB1M6Knc_dTznktTyHtwVsi",
    "Product Image1": "./images/1145MP.png"
  },
  {
    "Item Code": "1146BR",
    "Item Name": "BANGLE ROD 4 PART C.I.NICKLE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PgoLd_Yy_OGgvIkMjkrTYJanh42FUSaT",
    "Product Image1": "./images/1146BR.png"
  },
  {
    "Item Code": "1147FC",
    "Item Name": "FILE 20 CM – HI TECH",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1S2ISbwjxBj8D6KwjiT4v2-flh_a8H-CG",
    "Product Image1": "./images/1147FC.png"
  },
  {
    "Item Code": "1148FC",
    "Item Name": "FILE 20 CM – SUPER",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xol9O2shPyrMLQK1CGjZXlJqSfKzwjBO",
    "Product Image1": "./images/1148FC.png"
  },
  {
    "Item Code": "1149FC",
    "Item Name": "FILE 12 CM – SUPER",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1q36_bc-FccW-QMvAjkPe3Y-ivO2hUdgY",
    "Product Image1": "./images/1149FC.png"
  },
  {
    "Item Code": "1150FC",
    "Item Name": "FILE 14 CM – SUPER",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1I39EKf3sCIaCHtkbqQWVcCqfPQjCIQgR",
    "Product Image1": "./images/1150FC.png"
  },
  {
    "Item Code": "1151FC",
    "Item Name": "FILE 16 CM - SUPER",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=18gNxETStFLFRYcqARkavD-VuZSSMdC7S",
    "Product Image1": "./images/1151FC.png"
  },
  {
    "Item Code": "1152FC",
    "Item Name": "FILE 18 CM - SUPER",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sDi7x83-HVJlQdr3Zu8Q6tXIeS8M13rb",
    "Product Image1": "./images/1152FC.png"
  },
  {
    "Item Code": "1153FC",
    "Item Name": "FILE 22 CM",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=17h2n8wEDi6JHp1lLWfDOH-7Dns7h7Gkd",
    "Product Image1": "./images/1153FC.png"
  },
  {
    "Item Code": "1154FC",
    "Item Name": "FILE 24 CM",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1I8CcveNaPPUbATZPsQ5mkRgHcjXs4wr1",
    "Product Image1": "./images/1154FC.png"
  },
  {
    "Item Code": "1155SP",
    "Item Name": "SIA PAPER 1500",
    "Category": "POLISHING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1MJ_R19dGLhCxsSW1q43HS0ZLO0HXTEdD",
    "Product Image1": "./images/1155SP.png"
  },
  {
    "Item Code": "1156WF",
    "Item Name": "WOODEN FILE HANDLE 3",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vKsT7-jTT0BqOoyTongdro3Shc6jvOH6",
    "Product Image1": "./images/1156WF.png"
  },
  {
    "Item Code": "1157FU",
    "Item Name": "FILING UNIT",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BhIC2lWYCB8-4Dv1PU_TzC68go6EC0YJ",
    "Product Image1": "./images/1157FU.png"
  },
  {
    "Item Code": "1158WG",
    "Item Name": "WET GRINDING UNIT",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IdGHJsQQFXOXrIYDQkERBL-sgOAEd3ZY",
    "Product Image1": "./images/1158WG.png"
  },
  {
    "Item Code": "1159CS",
    "Item Name": "CEMENT SHEET (12X12X15 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jwhcD35aCUeXL19s8F9cS2PH9iJl6Tul",
    "Product Image1": "./images/1159CS.png"
  },
  {
    "Item Code": "1160CS",
    "Item Name": "CEMENT SHEET (12X12X20 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yxakf3Upmjpp-cgWsjV5wOUKKmEIN1f-",
    "Product Image1": "./images/1160CS.png"
  },
  {
    "Item Code": "1161CS",
    "Item Name": "CEMENT SHEET (12X12X30 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1l0DTPtVa5p7nr-pu68ajYW2j7DvBYOI6",
    "Product Image1": "./images/1161CS.png"
  },
  {
    "Item Code": "1162CS",
    "Item Name": "CEMENT SHEET (12X24X15/18 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1U14CdFTbHDptn3bOcAoB5tb5rC99TQBY",
    "Product Image1": "./images/1162CS.png"
  },
  {
    "Item Code": "1163CS",
    "Item Name": "CEMENT SHEET (12X24X20 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PZ9LZElLzxRi3yXTWycu33KnIkvrXuBd",
    "Product Image1": "./images/1163CS.png"
  },
  {
    "Item Code": "1164CS",
    "Item Name": "CEMENT SHEET (12X24X30 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FGXZvA-40eQ36nap3ROWNZcA6Ndd93Ef",
    "Product Image1": "./images/1164CS.png"
  },
  {
    "Item Code": "1165YA",
    "Item Name": "ALL PURPOSE YELLOW ALLOY FOR 21-22 KT - PKG. 500G (YA22UL.500G)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1h03Jhm9Ayp63f95zMQLoZwbt1Q6J8S9H",
    "Product Image1": "./images/1165YA.png"
  },
  {
    "Item Code": "1166YN",
    "Item Name": "YELLOW ALLOY FOR 18 KT CASTING PKG. 500G (YN82D.500G)",
    "Category": "METALS & ALLOYS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IDDLYApCk_DgwXRpX4MePS9XVnKG8n6Y",
    "Product Image1": "./images/1166YN.png"
  },
  {
    "Item Code": "1167KK",
    "Item Name": "KEMET 111097 1/4-KD-C2 DIAMOND COMPOUND 20G SYRINGE",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14Y7ZQgu2geAOLc3gL_80HPGYQdefrph-",
    "Product Image1": "./images/1167KK.png"
  },
  {
    "Item Code": "1168KK",
    "Item Name": "KEMET 111130 1-KD-C2  DIAMOND COMPOUND 10G SYRINGE",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1N7pztvfB_tjd_39YFWz8AGk_xWUmpPB8",
    "Product Image1": "./images/1168KK.png"
  },
  {
    "Item Code": "1169KK",
    "Item Name": "KEMET 111137 6-KD-C2 DIAMOND COMPOUND 10G SYRINGE",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Uwl3ZBdriajFyJkxvdURGzTGDRD8D9kg",
    "Product Image1": "./images/1169KK.png"
  },
  {
    "Item Code": "1170DM",
    "Item Name": "DIGITAL MICROSCOPE HD",
    "Category": "LOUPES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fRjcPmkUpALLw_PARGzkU9dp9VdvtBI6",
    "Product Image1": "./images/1170DM.png"
  },
  {
    "Item Code": "1171VP",
    "Item Name": "VACUUM PUMP OIL 1-GAL (UD 42006)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1j6TJaDOec-Vr8SvwhYQhLlmTbsFp9DIU",
    "Product Image1": "./images/1171VP.png"
  },
  {
    "Item Code": "1172SG",
    "Item Name": "SIMBA GAS CYLINDER GTT",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1H0pte3uAb9kZxFyQ2uRP2_uUXkFv-gvt",
    "Product Image1": "./images/1172SG.png"
  },
  {
    "Item Code": "1211RS",
    "Item Name": "SILICON GASKET SEAL 3.5",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UOLxZDbxyQfFkTjVzqSNy970gKMSiXg7",
    "Product Image1": "./images/1211RS.png"
  },
  {
    "Item Code": "1173CB",
    "Item Name": "Chain Bent Nose Pliers 130mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Dq7bRB2Zlr3MTwiqqo4VyBtAn82DnChC",
    "Product Image1": "./images/1173CB.png"
  },
  {
    "Item Code": "1174CN",
    "Item Name": "Chain Nose Pliers 130mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HjUetZwwajBm5M4kkDmDPCrhdHPTP2A1",
    "Product Image1": "./images/1174CN.png"
  },
  {
    "Item Code": "1175CN",
    "Item Name": "Chain Nose Serrated Pliers 130mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pf5nYSJ3p5yZ-HRLSHOL5txt8f0Ka11L",
    "Product Image1": "./images/1175CN.png"
  },
  {
    "Item Code": "1176FN",
    "Item Name": "Flat Nose Pliers 130mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tLv3HuZoZ7mi4LXihWMaWNCdrZ39BlND",
    "Product Image1": "./images/1176FN.png"
  },
  {
    "Item Code": "1177FS",
    "Item Name": "Flat Serrated Pliers 130mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1goAG_lY8PVsxxi9hpdg2n601CrAVd4TJ",
    "Product Image1": "./images/1177FS.png"
  },
  {
    "Item Code": "1178RN",
    "Item Name": "Round Nose Pliers 130mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xrpdqMfOkM5h3gWVepQu0nuBdg7WrjY7",
    "Product Image1": "./images/1178RN.png"
  },
  {
    "Item Code": "1179FH",
    "Item Name": "Flat & Half Round Pliers 130mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HWDueFkRG1llZKlKgY6oCKiaBBEY8H2S",
    "Product Image1": "./images/1179FH.png"
  },
  {
    "Item Code": "1180FH",
    "Item Name": "Flat & Round Pliers 130mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Qsb4NBENPhrHCUKAOAYOlvi2cORgyOvg",
    "Product Image1": "./images/1180FH.png"
  },
  {
    "Item Code": "1181CC",
    "Item Name": "Concave & Convex Pliers 130mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_jo8f-5xN3yAKBEUdUP42-gjyyW-flk7",
    "Product Image1": "./images/1181CC.png"
  },
  {
    "Item Code": "1182RC",
    "Item Name": "Round & Concave Pliers 130mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1b96VhTRbpyb4kl65AgiPSUt41uhFs4zk",
    "Product Image1": "./images/1182RC.png"
  },
  {
    "Item Code": "1183SC",
    "Item Name": "Side Cutters 130mm",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=19NqN2gW9Wc1rf0VU2Yph4lOoJYFeOCfg",
    "Product Image1": "./images/1183SC.png"
  },
  {
    "Item Code": "1184EC",
    "Item Name": "End Cutters 125mm",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ykm9SFJuvpVx-wEn94hweqaf0c3mHqBv",
    "Product Image1": "./images/1184EC.png"
  },
  {
    "Item Code": "1185LC",
    "Item Name": "Long Chain Nose Pliers 140mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FYsj3glH9YR5sxLZlHiprp57lg3aqmY8",
    "Product Image1": "./images/1185LC.png"
  },
  {
    "Item Code": "1186LC",
    "Item Name": "Long Chain Serrated Pliers 140mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1MhJ8fP1Z2kM4zE0oERytLVWX9v4OA72O",
    "Product Image1": "./images/1186LC.png"
  },
  {
    "Item Code": "1187LF",
    "Item Name": "Long Flat Pliers 140mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1C0H6LxxrF5P-dP71xl0sON2PWeq1I4sE",
    "Product Image1": "./images/1187LF.png"
  },
  {
    "Item Code": "1188LR",
    "Item Name": "Long Round Nose Pliers 140mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=18vHtkgicoB4LjtYMcaiT9rGApvHO5khZ",
    "Product Image1": "./images/1188LR.png"
  },
  {
    "Item Code": "1189BP",
    "Item Name": "Bending Pliers 140mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZbW4yBunQ56GLWx82bUwWSmQoHibXRQM",
    "Product Image1": "./images/1189BP.png"
  },
  {
    "Item Code": "1190RB",
    "Item Name": "Ring Bending Pliers 140mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IfG3UqOR1Y-lRmoBnbE3gy75-Pi-Ysuo",
    "Product Image1": "./images/1190RB.png"
  },
  {
    "Item Code": "1192RB",
    "Item Name": "Ring Bending Pliers 170mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1al0Z70ObFxCXrs6DgiIlJBXYZw-Ak5ho",
    "Product Image1": "./images/1192RB.png"
  },
  {
    "Item Code": "1191RB",
    "Item Name": "Ring Bending Pliers 170mm Alumanium",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mOt1w5892QlL-GddpThKi1tP4Jm4W4_P",
    "Product Image1": "./images/1191RB.png"
  },
  {
    "Item Code": "1193RH",
    "Item Name": "Ring Holding Pliers 140mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wq3pfZrorUvboyekEnzvQamd81BhZvOj",
    "Product Image1": "./images/1193RH.png"
  },
  {
    "Item Code": "1194BC",
    "Item Name": "Bent Chain Nose Pliers 130mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1q-v_9TK7eOCoUEoVfUkX7Bw8fVCUzCQ5",
    "Product Image1": "./images/1194BC.png"
  },
  {
    "Item Code": "1195WL",
    "Item Name": "Wire Looping Pliers 140mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bJQDcgeGpkUnY76tTBp29smDErs6PFJS",
    "Product Image1": "./images/1195WL.png"
  },
  {
    "Item Code": "1196WL",
    "Item Name": "Wire Loop with Chain Pliers",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13u8IkcSygPW5794iCvJuvZDEQyFpwUZv",
    "Product Image1": "./images/1196WL.png"
  },
  {
    "Item Code": "1197WL",
    "Item Name": "Wire Loop with Flat Pliers",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TlMFeJVxPlht_0ZKtXRh25W_sSnpd6Uw",
    "Product Image1": "./images/1197WL.png"
  },
  {
    "Item Code": "1198FP",
    "Item Name": "Flat Pliers with 3 Steps 130mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kCYmSc3T7oMyhgP5W2-ZHPFiXGsBjorG",
    "Product Image1": "./images/1198FP.png"
  },
  {
    "Item Code": "1199SP",
    "Item Name": "6 Steps Pliers 140mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hjAZW8SvIK3eSjgJod_YinfUOjySs65X",
    "Product Image1": "./images/1199SP.png"
  },
  {
    "Item Code": "1200WT",
    "Item Name": "Wrap & Tap Pliers 165mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1cLqmasHNIWp64NOGEgGBb4yHTlrYNUr-",
    "Product Image1": "./images/1200WT.png"
  },
  {
    "Item Code": "1201TH",
    "Item Name": "Tube Holding Pliers 170mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1q7arSpB6zWcowRkiRPEMftWL4EMhRvDK",
    "Product Image1": "./images/1201TH.png"
  },
  {
    "Item Code": "1202CC",
    "Item Name": "Coil Cutting Pliers 170mm",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Bm9cU6QrNSsSMD2cKLrag3zeWcGgj9mf",
    "Product Image1": "./images/1202CC.png"
  },
  {
    "Item Code": "1203FW",
    "Item Name": "Flat Wide Jaw Pliers 160mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kmva-OAblUGP0EgLxvUmkg5I_OC1eqPC",
    "Product Image1": "./images/1203FW.png"
  },
  {
    "Item Code": "1204FN",
    "Item Name": "Flat Nose Pliers Nylon 140mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1isVG3H_nWIYLNcKjG-5cpsh6TZO48aYu",
    "Product Image1": "./images/1204FN.png"
  },
  {
    "Item Code": "1205BP",
    "Item Name": "Bending Pliers Nylon 140mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YxWi_-7fozI7wBdNMDpHp2GPJvKWa85Q",
    "Product Image1": "./images/1205BP.png"
  },
  {
    "Item Code": "1206SS",
    "Item Name": "Snip Or Scissors Straight 170mm",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12VKPqK_96SYcEw--cct3MIOWMm4F5uxE",
    "Product Image1": "./images/1206SS.png"
  },
  {
    "Item Code": "1207SS",
    "Item Name": "Snip or Scissors Curved 170mm",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ua949yZSJkFqAqL8_NyI6R6i-pu0UbdU",
    "Product Image1": "./images/1207SS.png"
  },
  {
    "Item Code": "1208PP",
    "Item Name": "Punch Pliers 170mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hZ-mNwDXe3U_2sHBL7XNKpm5XCEk9hOa",
    "Product Image1": "./images/1208PP.png"
  },
  {
    "Item Code": "1209PP",
    "Item Name": "Punch Pliers 165mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KkN463E6YoNHZX2P-FW1O2CadtXKQqQi",
    "Product Image1": "./images/1209PP.png"
  },
  {
    "Item Code": "1210OS",
    "Item Name": "One Step Loop Pliers 140mm",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jrQ9Odi8yBr4M4Oxo8X1GWfzEGN115RR",
    "Product Image1": "./images/1210OS.png"
  },
  {
    "Item Code": "1212MS",
    "Item Name": "MAGNET SQUARE HEAVY NST",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PM6aiHezz26rmv20zFSEkx6okuJaKc7A",
    "Product Image1": "./images/1212MS.png"
  },
  {
    "Item Code": "1213CC",
    "Item Name": "CERAMIC CRUCIBLE D.47X57 S03",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VwRYC6o5_rk06qWV9KPww5LM6Chld_nU",
    "Product Image1": "./images/1213CC.png"
  },
  {
    "Item Code": "1214CC",
    "Item Name": "CERAMIC CRUCIBLE D.60X65 S04",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tFLLznZEWfLz_kQQUXtmp41fXJWF5pUW",
    "Product Image1": "./images/1214CC.png"
  },
  {
    "Item Code": "1215CC",
    "Item Name": "CERAMIC CRUCIBLE D.69X66 S05",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1chHOe5QDxDFyWg9jflRNCbra0asyPPne",
    "Product Image1": "./images/1215CC.png"
  },
  {
    "Item Code": "1216CC",
    "Item Name": "CERAMIC CRUCIBLE D.89X86 S1",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1q31A0pQobAzGoFwNgh0QKGuvwlKfEhoV",
    "Product Image1": "./images/1216CC.png"
  },
  {
    "Item Code": "1217CC",
    "Item Name": "CERAMIC CRUCIBLE D.100X112 S2",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_vXwFLdqcoecXX6T7WsB_dnqb7yEzbJz",
    "Product Image1": "./images/1217CC.png"
  },
  {
    "Item Code": "1218CC",
    "Item Name": "CERAMIC CRUCIBLE D.125X135 S3",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=11d8KiJ8EDUEIxBRlwkkXNNQdtURcXbt3",
    "Product Image1": "./images/1218CC.png"
  },
  {
    "Item Code": "1219AS",
    "Item Name": "A-SHAPE PRESSED CERAMIC CRUCIBLE D.49X58 S03P",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1d7Xl9_kIBmeTPNOZNEyJ6PNYd1Z1GpOv",
    "Product Image1": "./images/1219AS.png"
  },
  {
    "Item Code": "1220AS",
    "Item Name": "A-SHAPE PRESSED CERAMIC CRUCIBLE D.60X67 S04P",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iIMGhCAzGrv7skb9e-Wl440hg08isSx5",
    "Product Image1": "./images/1220AS.png"
  },
  {
    "Item Code": "1221AS",
    "Item Name": "A-SHAPE PRESSED CERAMIC CRUCIBLE D.68X78 S05P",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lbOSVzw9-15rTuzJxPefqhqHzVK_26gF",
    "Product Image1": "./images/1221AS.png"
  },
  {
    "Item Code": "1222AS",
    "Item Name": "A-SHAPE PRESSED CERAMIC CRUCIBLE D.80X98 S1P",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CBBoAc1RVeFHskpFd4Dfo5YHKzE8p0_t",
    "Product Image1": "./images/1222AS.png"
  },
  {
    "Item Code": "1223AS",
    "Item Name": "A-SHAPE PRESSED CERAMIC CRUCIBLE D.96X111 S2P",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1M55BuVsYrjytAeuwdReP4-urDtt52KJ2",
    "Product Image1": "./images/1223AS.png"
  },
  {
    "Item Code": "1224AS",
    "Item Name": "A-SHAPE PRESSED CERAMIC CRUCIBLE D.106X127 S3P",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=18blH8IiFAplMEAhtm0iCUpYZD0URxdHD",
    "Product Image1": "./images/1224AS.png"
  },
  {
    "Item Code": "1225AS",
    "Item Name": "A-SHAPE PRESSED CERAMIC CRUCIBLE S4P",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1D3N5VxEvW06YM9qscNtuz1xYUi--ylaJ",
    "Product Image1": "./images/1225AS.png"
  },
  {
    "Item Code": "1226AS",
    "Item Name": "A-SHAPE PRESSED CERAMIC CRUCIBLE S5P",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dS5pIjjO6igA1OwIhfhc3VgczWHkfxNQ",
    "Product Image1": "./images/1226AS.png"
  },
  {
    "Item Code": "1227AS",
    "Item Name": "A-SHAPE PRESSED CERAMIC CRUCIBLE D.124X152 S6P",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dWYN6p143GqAB9Yu8tu1Qq-NejAHYlnl",
    "Product Image1": "./images/1227AS.png"
  },
  {
    "Item Code": "1236FM",
    "Item Name": "FACE MASH",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1GG8F6cu0SOr6_2f1yn_EkFagWMDzlx3h",
    "Product Image1": "./images/1236FM.png"
  },
  {
    "Item Code": "1237DW",
    "Item Name": "DISTILED WATER",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xO_lTGWBxEGbh07xR6VJSS763tt2Qwve",
    "Product Image1": "./images/1237DW.png"
  },
  {
    "Item Code": "1228PL",
    "Item Name": "PASTA LUXOR ROSA RED",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1njqrPugx817HqmjQczD28gLRMH_bWucn",
    "Product Image1": "./images/1228PL.png"
  },
  {
    "Item Code": "1230OC",
    "Item Name": "SMT1",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uI_rqT-UtLyHKhcPZZ8SAkt9LeN7_z1B",
    "Product Image1": "./images/1230OC.png"
  },
  {
    "Item Code": "1231MP",
    "Item Name": "MENZERNA P126 - 500G",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1EIl0-ctdYhPGYYNetF3HezRLpfgbDt2T",
    "Product Image1": "./images/1231MP.png"
  },
  {
    "Item Code": "1232MM",
    "Item Name": "MENZERNA M5 - 500G",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mWjGKlu0SnqovMWqYeM49CyBEbP8-aHl",
    "Product Image1": "./images/1232MM.png"
  },
  {
    "Item Code": "1233MP",
    "Item Name": "MENZERNA P175 - 500G",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1M8JEPJKLg2-AxczASb9HnJehM-BTq_2z",
    "Product Image1": "./images/1233MP.png"
  },
  {
    "Item Code": "1234MG",
    "Item Name": "MENZERNA 456G - 580G",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15By9KUvTDNKw-krBDpRbw9X-Gkvhntxh",
    "Product Image1": "./images/1234MG.png"
  },
  {
    "Item Code": "1235BP",
    "Item Name": "BUSH PUMP FILTRE",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1m6_UpU_OI3RrjQ_fgbMNfm8TeLF4o0e-",
    "Product Image1": "./images/1235BP.png"
  },
  {
    "Item Code": "1238GP",
    "Item Name": "GOLD PLATING STRIKE BATH 1G/L PURE GOLD COLOR - 1L (GFX1)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XBaxnP7zJlxWcH428V3k8JSAM_U4mCvL",
    "Product Image1": "./images/1238GP.png"
  },
  {
    "Item Code": "1239CF",
    "Item Name": "100% CYANIDE FREE SILVER PLATING BATH 25G/L (KIT 1LA+1LB)- PKT 1L (AG-ECO1)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1MD-Ti7g2DUzapuoFCt7SsYq4E2_E8zHQ",
    "Product Image1": "./images/1239CF.png"
  },
  {
    "Item Code": "1240RW",
    "Item Name": "RUBBER WHEEL KJ",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15kd4Ln4FbIfymu92Ncb-yK0o3WbOY8xx",
    "Product Image1": "./images/1240RW.png"
  },
  {
    "Item Code": "1241BW",
    "Item Name": "BRASS WIRE 1MM (19.G)",
    "Category": "METALS & ALLOYS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Q6Oyc4n09eCfjwaK2nSZ7h_fDaV8jz70",
    "Product Image1": "./images/1241BW.png"
  },
  {
    "Item Code": "1242TA",
    "Item Name": "TESTING ACID 18K, 21K, 22K KJ",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zn7_8Cq9U5UHZ-DQpjB-bmu9AEp2FhN4",
    "Product Image1": "./images/1242TA.png"
  },
  {
    "Item Code": "1243TA",
    "Item Name": "TESTING ACID STONE KJ",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZqGSjk2cp7B10QLusah6XaJWY6U2ecj6",
    "Product Image1": "./images/1243TA.png"
  },
  {
    "Item Code": "1251KB",
    "Item Name": "KOMET-194 BUR NO 10",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UrgMXd6u9CTKBMiTMxCmlCUtgmj_fi0h",
    "Product Image1": "./images/1251KB.png"
  },
  {
    "Item Code": "1252KB",
    "Item Name": "KOMET-194 BUR NO 12",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1a4R4Eo43vqKCkaLwaVfHgFnpHYNshpvX",
    "Product Image1": "./images/1252KB.png"
  },
  {
    "Item Code": "1253RB",
    "Item Name": "KOMET-1-ROUND-003",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KOTMcUBEnCBjDivu0LzpybpJ5cGORY0Z",
    "Product Image1": "./images/1253RB.png"
  },
  {
    "Item Code": "1254KR",
    "Item Name": "KOMET-1-ROUND-(05 TO 23)",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-k7rR0NVLYe0-5NkbuLZKZkmeats6pq2",
    "Product Image1": "./images/1254KR.png"
  },
  {
    "Item Code": "1255KR",
    "Item Name": "KOMET-1-ROUND-(24 TO 30)",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1inMWpiUZLZcepFin_2f_m40A4taxOGMH",
    "Product Image1": "./images/1255KR.png"
  },
  {
    "Item Code": "1257HB",
    "Item Name": "HONEY SOLDERING SHEET",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1OanKlxcz2Jz-LVjP0UjvJX5D1EoKF0VO",
    "Product Image1": "./images/1257HB.png"
  },
  {
    "Item Code": "1256SW",
    "Item Name": "SEALING WAX",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DKeqT-5eMQwVVb7t1T92nrm67TQ3AmkU",
    "Product Image1": "./images/1256SW.png"
  },
  {
    "Item Code": "1259FD",
    "Item Name": "FILE DOUBLE HALF/ ROUND NO 3",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ULyJJyVqW2hG-oC6x426Jy7HEt98GZBY",
    "Product Image1": "./images/1259FD.png"
  },
  {
    "Item Code": "1260FS",
    "Item Name": "FILE SWISS ROUND NO 3",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=13sXwFC3RxuYzE4gxOFK4FTN-p8WugH8c",
    "Product Image1": "./images/1260FS.png"
  },
  {
    "Item Code": "1261FR",
    "Item Name": "FILE ROUND FLAT NO 3",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=16rlqsi0BuSIZhI1rVwuh11dzkba_e090",
    "Product Image1": "./images/1261FR.png"
  },
  {
    "Item Code": "1258TB",
    "Item Name": "TRIANGLE BURNISER CHIKLI",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17myMF6hZ1lyRS8jhhLCj-JzMPUTuN7w6",
    "Product Image1": "./images/1258TB.png"
  },
  {
    "Item Code": "1244DS",
    "Item Name": "DIGITAL SCALE 500G GKTL",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sH4GQjK7M9beiZbxq1ej1tyF0XagbUmn",
    "Product Image1": "./images/1244DS.png"
  },
  {
    "Item Code": "1245SB",
    "Item Name": "SHIMADZU BALANCE UX4200H",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LTW27vBCaDTNcENLrfVIOhlnOeiiHAb5",
    "Product Image1": "./images/1245SB.png"
  },
  {
    "Item Code": "1246CS",
    "Item Name": "CEMENT SHEET (6X12 10/12 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=16s-PwaLtOSkDNlX9UilL6CQaSAbCBwHE",
    "Product Image1": "./images/1246CS.png"
  },
  {
    "Item Code": "1247CS",
    "Item Name": "CEMENT SHEET (6X12 17/20 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JHLD8rUp-wh9TL4IlXWNsG2KJAvT7wpC",
    "Product Image1": "./images/1247CS.png"
  },
  {
    "Item Code": "1248CS",
    "Item Name": "CEMENT SHEET (6X24 10/12 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1b0Nsv26AwdT97s7k6bawFd9kkxWCCWXN",
    "Product Image1": "./images/1248CS.png"
  },
  {
    "Item Code": "1249CS",
    "Item Name": "CEMENT SHEET (6X24 17/20 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-QQSA1D--I584EeNwnHzlinlqBGUbsG-",
    "Product Image1": "./images/1249CS.png"
  },
  {
    "Item Code": "1250CS",
    "Item Name": "CEMENT SHEET (12X12 10/12 MM)",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=186WvDTWGP3CiVLUSxEgc3lzd8TJuuUNP",
    "Product Image1": "./images/1250CS.png"
  },
  {
    "Item Code": "1269BC",
    "Item Name": "BOLT CUTTER 42 INCH JAPAN",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1NmJFJbt8Ld16otdiPyhqHUf7rIwROOtl",
    "Product Image1": "./images/1269BC.png"
  },
  {
    "Item Code": "1268AS",
    "Item Name": "ACRYLIC SCALE COVER FIBER",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dmiUBfgpqEBDChA0oFvG1E6LFnD6pP42",
    "Product Image1": "./images/1268AS.png"
  },
  {
    "Item Code": "1265BS",
    "Item Name": "BOREX (SUHAGA)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vTj5VWm_Qd9ghzbcKW5nFLQIIn5uXse5",
    "Product Image1": "./images/1265BS.png"
  },
  {
    "Item Code": "1267AS",
    "Item Name": "A&D SCALE 0.00 5KG JAPAN FZ5000I",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_plac0iQYYGXZ4zW9P3TH9f4yLm76RbM",
    "Product Image1": "./images/1267AS.png"
  },
  {
    "Item Code": "1262WB",
    "Item Name": "WOODEN BENCH PIN",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Iym4E5fqeEMdW4KmddtWbcw926vDO-9F",
    "Product Image1": "./images/1262WB.png"
  },
  {
    "Item Code": "1263GS",
    "Item Name": "GRAVER SWISS",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=18JmOo8LFIRnEmm7JJ9wHHYJ-_uSiAPyk",
    "Product Image1": "./images/1263GS.png"
  },
  {
    "Item Code": "1264GH",
    "Item Name": "GRAVER HANDE WOODEN",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UT6HeL5buTCv9s7iUjnc-4rQaddX4-xI",
    "Product Image1": "./images/1264GH.png"
  },
  {
    "Item Code": "1266BS",
    "Item Name": "BUR STAND USA",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13oxpOYMNWabTSoT4Yl0bME0nKzdQlc9g",
    "Product Image1": "./images/1266BS.png"
  },
  {
    "Item Code": "1271HI",
    "Item Name": "HAMMER INDIA MIX SIZE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1NImgrDLG9iFGfKMIC8-26fLrnEQ1Dd6E",
    "Product Image1": "./images/1271HI.png"
  },
  {
    "Item Code": "1270FH",
    "Item Name": "4MM FLAT HAMMER TOOL",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13PA5Aw2F9Eq_HtaW3NVBPVx6Updm33nw",
    "Product Image1": "./images/1270FH.png"
  },
  {
    "Item Code": "1272RC",
    "Item Name": "RT 161 CP MOTOR RGT",
    "Category": "MOTORS AND ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1oWNFowGDYy3ho4oE8KY5ekkiXoIZIlkV",
    "Product Image1": "./images/1272RC.png"
  },
  {
    "Item Code": "1273SI",
    "Item Name": "STAMP IND 14K",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1d-d3sI7ZXLkcCDGGGlGJsHErswscYpEx",
    "Product Image1": "./images/1273SI.png"
  },
  {
    "Item Code": "1274WD",
    "Item Name": "WIRE DRAW DIES (20G TO 36G) 17 PCS SET",
    "Category": "DIAMOND TOOLS AND DIAMOND DRAWING DIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Jj_PU3UDB1W8b1thM5cQIBwdx9mWUX_I",
    "Product Image1": "./images/1274WD.png"
  },
  {
    "Item Code": "1275KH",
    "Item Name": "KOMET 253A-HART-012",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iVfkenyzs6c1sorZ-g8w2IeUn4O4sXYn",
    "Product Image1": "./images/1275KH.png"
  },
  {
    "Item Code": "1276KH",
    "Item Name": "KOMET 253A-HART-025",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qoPg3D7p7OSToRdccVZOFCypsj5pmuDw",
    "Product Image1": "./images/1276KH.png"
  },
  {
    "Item Code": "1277KH",
    "Item Name": "KOMET-203L-DRILL-010",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mJRvKMZAuxh2kOAy8xFQBekzkdlCBO9y",
    "Product Image1": "./images/1277KH.png"
  },
  {
    "Item Code": "1278ID",
    "Item Name": "INSIZE DIGITAL CALIPER 150MM",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CwlEOzt0GlkjHtM-jQncnySXWuTL1HHl",
    "Product Image1": "./images/1278ID.png"
  },
  {
    "Item Code": "1279DG",
    "Item Name": "DIAL GAUGE CALIPER",
    "Category": "DRILL BITS & BURS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1OJ19C4QnQ5CgqVgGbHiFR4r1wbDcAKW4",
    "Product Image1": "./images/1279DG.png"
  },
  {
    "Item Code": "1280FL",
    "Item Name": "FILE LA 2411-200-2",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1XDez3zZPY_SY056BEIQVD82i6U-aOIsp",
    "Product Image1": "./images/1280FL.png"
  },
  {
    "Item Code": "1281FL",
    "Item Name": "FILE LA 2405-200-1",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dOIvn6O6oPfYFz9DGGYbQg5xx9haPiJj",
    "Product Image1": "./images/1281FL.png"
  },
  {
    "Item Code": "1282FL",
    "Item Name": "FILE LA 24444407-200-1",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ume0k-TkDtn223eg4UNNn45m7zLROPeN",
    "Product Image1": "./images/1282FL.png"
  },
  {
    "Item Code": "1283LM",
    "Item Name": "LASSAG MINI SAG LASER MINI",
    "Category": "LASER MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZIxO3_PZL-5T6ZS-ZRicbvKhSXFJ7mAs",
    "Product Image1": "./images/1283LM.png"
  },
  {
    "Item Code": "1284LP",
    "Item Name": "LASER PLUS SAG LASER PLUS",
    "Category": "LASER MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Laxm6HnYysIDUlR5WF64m78R3PYeoIdS",
    "Product Image1": "./images/1284LP.png"
  },
  {
    "Item Code": "1285LP",
    "Item Name": "LASSAG PRO",
    "Category": "LASER MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=16dHg2VpsGW2YN56zW8w5IQml6eyx1Cwp",
    "Product Image1": "./images/1285LP.png"
  },
  {
    "Item Code": "1286CR",
    "Item Name": "CASTING REJA MIX SIZE 500GM",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1L7PK_bDjr2fUT1WdxZkyKYYs3hoQe_eY",
    "Product Image1": "./images/1286CR.png"
  },
  {
    "Item Code": "1287LI",
    "Item Name": "4 & 2 LINE INGOT MOULD 6/"/"",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=16sqYJgksy--CQ-32QUVFuAPH7XvBqSRC",
    "Product Image1": "./images/1287LI.png"
  },
  {
    "Item Code": "1288LI",
    "Item Name": "4 & 2 LINE INGOT MOULD 8/"/"",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tqMFwP7_VIpUiRpRVtDydQrcT8WCg71A",
    "Product Image1": "./images/1288LI.png"
  },
  {
    "Item Code": "1289LI",
    "Item Name": "4 & 2 LINE INGOT MOULD 10/"/"",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QSp5Cxn6-EJ5m8EyL2OUHn4yQiLHfADr",
    "Product Image1": "./images/1289LI.png"
  },
  {
    "Item Code": "1290LI",
    "Item Name": "4 & 2 LINE INGOT MOULD 12/"/"",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1O0C3w1X0IAlJDz7FcD0_Xs2BTCx5-ki1",
    "Product Image1": "./images/1290LI.png"
  },
  {
    "Item Code": "1291LI",
    "Item Name": "4 & 2 LINE INGOT MOULD 14/"/"",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1oR-zKliolwr5gz2pg2BDJEQuvnANXUh8",
    "Product Image1": "./images/1291LI.png"
  },
  {
    "Item Code": "1292LI",
    "Item Name": "4 & 2 LINE INGOT MOULD 16/"/"",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13CjzUlulEUHZONO9IB7G5njiI2Yz8_6x",
    "Product Image1": "./images/1292LI.png"
  },
  {
    "Item Code": "1293LI",
    "Item Name": "4 & 2 LINE INGOT MOULD 18/"/"",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1S4Kh5bNjUN1eNZOO0pAR0R6RLbZ-o0cZ",
    "Product Image1": "./images/1293LI.png"
  },
  {
    "Item Code": "1294LS",
    "Item Name": "5 LINE SQUARE INGOT MOULD 8/"/"",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Ol_YJLEz7OpGV85ZknISNCqTKQn-8xN4",
    "Product Image1": "./images/1294LS.png"
  },
  {
    "Item Code": "1295LS",
    "Item Name": "5 LINE SQUARE INGOT MOULD 12/"/"",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CmexcpOw_n2488sJ7MjKvEfm1dCSXO70",
    "Product Image1": "./images/1295LS.png"
  },
  {
    "Item Code": "1296IM",
    "Item Name": "1 LINE INGOT MOULD (15MMX1/"/"X14/"/")",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1f_p4-U5FZ1v_2JdZla2r5GHz7MAhV-SZ",
    "Product Image1": "./images/1296IM.png"
  },
  {
    "Item Code": "1297IM",
    "Item Name": "1 LINE INGOT MOULD (15MMX1.5/"/"X14/"/")",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1CIg3vjqxbbFQX6IPKBsT5cIj8XAjKvGb",
    "Product Image1": "./images/1297IM.png"
  },
  {
    "Item Code": "1298LI",
    "Item Name": "1 LINE INGOT MOULD (15MMX2/"/"X14/"/")",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hUuU9zHffYntn5t8ZSVGuY1ooYqa1Z5s",
    "Product Image1": "./images/1298LI.png"
  },
  {
    "Item Code": "1299BR",
    "Item Name": "BALI ROD 2/"/" X 12/"/"",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KHSkSM3be-lDujB3-909wZp1lGR3EMOB",
    "Product Image1": "./images/1299BR.png"
  },
  {
    "Item Code": "1300RE",
    "Item Name": "RING EXPANDING M/C DOUBLE STICK ( 1 TO 36 + 1 TO 15 )",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1nf-tuNEFFuKbfbp-jXFfeFOiUnZ3HYNK",
    "Product Image1": "./images/1300RE.png"
  },
  {
    "Item Code": "1301RE",
    "Item Name": "RING EXPANDING M/C 1. TO 36 STICK BENDING M/C",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IEjQEwZcW-TtOTgIpbP-BFja6hHi8Zw1",
    "Product Image1": "./images/1301RE.png"
  },
  {
    "Item Code": "1302NS",
    "Item Name": "NECKLACE STAND 9.5/"/"X8/"/"X5.5/"/"",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YKWriMzs9qpo6wUPEkY89x8JRQsWP4-w",
    "Product Image1": "./images/1302NS.png"
  },
  {
    "Item Code": "1303PB",
    "Item Name": "PVC BOWLS 5/"/"",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fDiuGxfyb5LLC5AMoD5B1IEogsURo8WH",
    "Product Image1": "./images/1303PB.png"
  },
  {
    "Item Code": "1304PV",
    "Item Name": "PVC BOWLS 6/"/"",
    "Category": "UTENSILS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-Jhh9i1ce64q4R2N5WPh-_0utlqMpNvm",
    "Product Image1": "./images/1304PV.png"
  },
  {
    "Item Code": "1305RI",
    "Item Name": "RED REZI  W11600",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1v6hKeN0H-smh9HRcW2BCk5t8h0L9fhV1",
    "Product Image1": "./images/1305RI.png"
  },
  {
    "Item Code": "1306IM",
    "Item Name": "INGOT MOULD BISCUIT  2 SIDE 500 GRAM, 100 & 50 GRAM",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mJE3Sqo_Y4iQlqUquwReK5Pm--lfRUN7",
    "Product Image1": "./images/1306IM.png"
  },
  {
    "Item Code": "1307IM",
    "Item Name": "INGOT MOULD BISCUIT TYPE DOUBLE SIDE 2 KGS+ 500+ 300",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Iox7CDW2b4ud9Y-JF9NXsUvkDnFqlen9",
    "Product Image1": "./images/1307IM.png"
  },
  {
    "Item Code": "1308IM",
    "Item Name": "INGOT MOULD BISCUIT 2 SIDE 8 + 2 KGS",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1cmBeJQfj-WTFJYQyCJR5wgp2e50v3eX0",
    "Product Image1": "./images/1308IM.png"
  },
  {
    "Item Code": "1309JR",
    "Item Name": "JUMP RING MAKER ALLUMINIUM PEPE TYPE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mF8Y2q_UFJE0-87eYzQ8iUThfbKYOgE7",
    "Product Image1": "./images/1309JR.png"
  },
  {
    "Item Code": "1310JR",
    "Item Name": "JUMP RING MAKER C.I. BODY WITH WOODEN BASE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1K1qWB94eEcIgVB7UB7C9geaz7-p1U-VN",
    "Product Image1": "./images/1310JR.png"
  },
  {
    "Item Code": "1311EB",
    "Item Name": "ENGRAVING BLOCK 3 INCH CHROME FINISH",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wO60bmWa4N53euL_TQqlUfYL1xOwMl6q",
    "Product Image1": "./images/1311EB.png"
  },
  {
    "Item Code": "1312EB",
    "Item Name": "ENGRAVING BLOCK 5 INCH",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12NUPnBF5b2YM_l6-iebFIUUWUwG6LUYz",
    "Product Image1": "./images/1312EB.png"
  },
  {
    "Item Code": "1313EB",
    "Item Name": "ENGRAVING BLOCK 5 INCH WITH ATTACHMENT",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TAdjqfpjTyfxlH1Msept8LK1JP5ES9yY",
    "Product Image1": "./images/1313EB.png"
  },
  {
    "Item Code": "1314RM",
    "Item Name": "ROLLING MACHINE 125MM REDUXTION GEAR HAND OPP",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jHjddK9E28NHn2DFnweUZybyIit4NSA7",
    "Product Image1": "./images/1314RM.png"
  },
  {
    "Item Code": "1315FB",
    "Item Name": "FORMING BLOCK 8 X 1.5 ( LASIA )",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1AYIxuDsEW3KIz6OOW6dlSRYKTtEkbPo5",
    "Product Image1": "./images/1315FB.png"
  },
  {
    "Item Code": "1316HE",
    "Item Name": "HORN. ENVIL.FLATBASE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1l-sY5nsnO9QyDaiQVk-5M5V_NQCRlT6_",
    "Product Image1": "./images/1316HE.png"
  },
  {
    "Item Code": "1317IW",
    "Item Name": "IND WHITE RUBBER GLOVES 18/"/"",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mbgXJJMiAxsy6A_a21g1xsVC7RdzNNwH",
    "Product Image1": "./images/1317IW.png"
  },
  {
    "Item Code": "1318IW",
    "Item Name": "IND WHITE RUBBER GLOVES 22/"/"",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jdXavGNDzK99aVQ2Pr-2nv50VQjf3HJq",
    "Product Image1": "./images/1318IW.png"
  },
  {
    "Item Code": "1319PH",
    "Item Name": "PVC HAND GLOVES SUPREME 18/"/"",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1T_J1huTwzmRTDpFWPj0R4athAzxlINDF",
    "Product Image1": "./images/1319PH.png"
  },
  {
    "Item Code": "1320IW",
    "Item Name": "IND WHITE RUBBER GLOVES EXTRA THICK 18/"/"",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rB57YthxWcv5Cu7GNkGYN_uDaGjzwL6V",
    "Product Image1": "./images/1320IW.png"
  },
  {
    "Item Code": "1321IW",
    "Item Name": "IND WHITE RUBBER GLOVES EXTRA THICK 22/"/"",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lP0hyCFYzJzFwdvEJ9BtsTmzOKb2-5Wz",
    "Product Image1": "./images/1321IW.png"
  },
  {
    "Item Code": "1322PH",
    "Item Name": "PVC HAND GLOVES SUPREME 22/"/"",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=11AClL9n_WVSvDk0GeRvLCMAhkZe8Vppo",
    "Product Image1": "./images/1322PH.png"
  },
  {
    "Item Code": "1323PH",
    "Item Name": "PVC HAND GLOVES SUPREME SUPPORTED 22/"/"",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TOHHSn83CmSK6DJCiW-3I4cJnaWT7L9A",
    "Product Image1": "./images/1323PH.png"
  },
  {
    "Item Code": "1324IW",
    "Item Name": "IND WHITE RUBBER GLOVES DRAYER 24/"/"",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UTGprNgrwFwfWP77lxGyIYxJjiWV5RJY",
    "Product Image1": "./images/1324IW.png"
  },
  {
    "Item Code": "1325AM",
    "Item Name": "ALUMINIUM MOULD DOUBLE HOLE 6 MM X 8 MM X 8/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Zg7oYl9aZbr0aGnOyuDUMhKxwPAJ3pfh",
    "Product Image1": "./images/1325AM.png"
  },
  {
    "Item Code": "1326AM",
    "Item Name": "ALUMINIUM MOULD DOUBLE HOLE 8 MM X 10 MM X 8/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1p4XV5XByM8jBiDPfTsd8ZS9IQyRl-lDA",
    "Product Image1": "./images/1326AM.png"
  },
  {
    "Item Code": "1327AM",
    "Item Name": "ALUMINIUM MOULD THREE HOLE 6 MM X 8 MM X 10 MM X 8/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qOr3nAk3gK7c2QFPpUkOdhluh4JiKUc4",
    "Product Image1": "./images/1327AM.png"
  },
  {
    "Item Code": "1328AM",
    "Item Name": "ALUMINIUM MOULD SINGLE HOLE 6 MM X 8/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZCpHqjTiesRSkgURu9D4cxh5psUb8-zz",
    "Product Image1": "./images/1328AM.png"
  },
  {
    "Item Code": "1329AM",
    "Item Name": "ALUMINIUM MOULD SINGLE HOLE 8 MM X 8/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1892rDbZWo7SqdDt3LF5cB6k_JPAW7gs9",
    "Product Image1": "./images/1329AM.png"
  },
  {
    "Item Code": "1330AM",
    "Item Name": "ALUMINIUM MOULD SINGLE HOLE 10 MM X 8/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fJy69th39QXes864frhXOq1HJeS9KAws",
    "Product Image1": "./images/1330AM.png"
  },
  {
    "Item Code": "1331AM",
    "Item Name": "ALUMINIUM MOULD SINGLE HOLE 8 MM X 10/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UU9utKKkBjoYkWbYpdCWG2CBYFlr5jdq",
    "Product Image1": "./images/1331AM.png"
  },
  {
    "Item Code": "1332AM",
    "Item Name": "ALUMINIUM MOULD DOUBLE HOLE 6 MM X 8 MM X 10/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vqQ7Wh9GIabIza19py2Q-spW0KS_vQqh",
    "Product Image1": "./images/1332AM.png"
  },
  {
    "Item Code": "1333AM",
    "Item Name": "ALUMINIUM MOULD THREE HOLE 6mm X 8mm X 10mm X 10”",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=18xKOaZUJl7SM7FWsfE1C03sL5M_JOhfq",
    "Product Image1": "./images/1333AM.png"
  },
  {
    "Item Code": "1334BW",
    "Item Name": "BUFFING WHEEL WHITE 2 X 100",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=155Thqfx1lPYKNpIQbGnjvyKYFr_pcqcn",
    "Product Image1": "./images/1334BW.png"
  },
  {
    "Item Code": "1335BW",
    "Item Name": "BUFFING WHEEL WHITE 2 X 200",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Y5efXH4DVYifNmLQQf7BPiu_k3mscde1",
    "Product Image1": "./images/1335BW.png"
  },
  {
    "Item Code": "1336BW",
    "Item Name": "BUFFING WHEEL WHITE 2.5 X 100",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1np8xW0at_LWvrhvZmucrh-oyU2XT2O12",
    "Product Image1": "./images/1336BW.png"
  },
  {
    "Item Code": "1337BW",
    "Item Name": "BUFFING WHEEL WHITE 3 X 200",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1E2FbNzT7_URBSARpcNKpVbUbJ3ylhfiz",
    "Product Image1": "./images/1337BW.png"
  },
  {
    "Item Code": "1338BW",
    "Item Name": "BUFFING WHEEL WHITE 2.5 X 200",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=17KFBZw0wUKSFcW7w_svtM0XC15hGj94z",
    "Product Image1": "./images/1338BW.png"
  },
  {
    "Item Code": "1339BW",
    "Item Name": "BUFFING WHEEL WHITE 3 X 100",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bJV3Vk9FlGTnYxu4K1Hu4yKizyE3entf",
    "Product Image1": "./images/1339BW.png"
  },
  {
    "Item Code": "1340BW",
    "Item Name": "WOODEN HAMMER OVAL 1.5” X 3”",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1n177NOTHyL0-FT45mCSXTGjn4W_5D7wn",
    "Product Image1": "./images/1340BW.png"
  },
  {
    "Item Code": "1341BW",
    "Item Name": "WOODEN HAMMER FLAT 2” X 4”",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gnKiIriUVGKSF_c2poLXt1x7Kc87A751",
    "Product Image1": "./images/1341BW.png"
  },
  {
    "Item Code": "1342TB",
    "Item Name": "TABLE BRUSH",
    "Category": "POLISHING BRUSH",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dhKs69OewKlhGgINyiYnS1UK9O6Rz285",
    "Product Image1": "./images/1342TB.png"
  },
  {
    "Item Code": "1343WB",
    "Item Name": "WOODEN BENCH PIN 5/"/" X 2.5/"/"",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qRIUMr87sSZZq2DR_5EKhSIf8ftNorwH",
    "Product Image1": "./images/1343WB.png"
  },
  {
    "Item Code": "1344WB",
    "Item Name": "WOODEN BENCH PIN 6/"/" X 1.5/"/"",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15b-1hwBEWvr7Ta34Hweymttnp3UgXhkr",
    "Product Image1": "./images/1344WB.png"
  },
  {
    "Item Code": "1345WB",
    "Item Name": "WOODEN BENCH PIN 7/"/" X 1.5/"/"",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Q0ioQfA33dCVmRBf67CFphl6bSjtXWFS",
    "Product Image1": "./images/1345WB.png"
  },
  {
    "Item Code": "1346WB",
    "Item Name": "WOODEN BENCH PIN 7” X 2.75”",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1m4hlhhWjULLI0JKjxO6dA24vPOYcyebQ",
    "Product Image1": "./images/1346WB.png"
  },
  {
    "Item Code": "1347SR",
    "Item Name": "SILICON RING DIA 2/"/" X 3MM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bj9b9l5t3VcWu_9rtgxNZOHRxEe_jIhK",
    "Product Image1": "./images/1347SR.png"
  },
  {
    "Item Code": "1348SR",
    "Item Name": "SILICON RING DIA 2 1/2/"/" X 3MM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RsZEYwWwbc0tBbo6dB7dCZWWgRCuiyVv",
    "Product Image1": "./images/1348SR.png"
  },
  {
    "Item Code": "1349SR",
    "Item Name": "SILICON RING DIA 3/"/" X 3MM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1r3mqdyvCueR_ARd0aHfnibC2K2COrZFP",
    "Product Image1": "./images/1349SR.png"
  },
  {
    "Item Code": "1350SR",
    "Item Name": "SILICON RING DIA 3 1/2/"/" X 3MM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1m4iFONmPaAm2KtacBuF9VYMw28PSofwY",
    "Product Image1": "./images/1350SR.png"
  },
  {
    "Item Code": "1351SR",
    "Item Name": "SILICON RING DIA 4/"/" X 3MM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vUTtwUrsU_fCCPaBacdapqcMNY52u_ib",
    "Product Image1": "./images/1351SR.png"
  },
  {
    "Item Code": "1352SR",
    "Item Name": "SILICON RING DIA 5/"/" X 3MM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=11xdscZhuRIjQolscaqBQIkH78iZz_Zv2",
    "Product Image1": "./images/1352SR.png"
  },
  {
    "Item Code": "1353SR",
    "Item Name": "SILICON RING DIA 2/"/" X 5MM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UmwF2z6N6jeyAv8Hy9kAhsY21ysXScy2",
    "Product Image1": "./images/1353SR.png"
  },
  {
    "Item Code": "1354SR",
    "Item Name": "SILICON RING DIA 2 1/2/"/" X 5MM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iVVs8OMdNLqxTUj2ty_AGagh7MW03q67",
    "Product Image1": "./images/1354SR.png"
  },
  {
    "Item Code": "1355SR",
    "Item Name": "SILICON RING DIA 3/"/" X 5MM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=129IR9nvw-UHKSyZGbmizwkdPzU4_XiD_",
    "Product Image1": "./images/1355SR.png"
  },
  {
    "Item Code": "1356SR",
    "Item Name": "SILICON RING DIA 3 1/2/"/" X 5MM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wKERAuf59HdfeAyvk-5LaCW63w0mcqZy",
    "Product Image1": "./images/1356SR.png"
  },
  {
    "Item Code": "1357SR",
    "Item Name": "SILICON RING DIA 4/"/" X 5MM",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1NKu3oaz3POWkWBwYoyxcg3P-ThUeHtzJ",
    "Product Image1": "./images/1357SR.png"
  },
  {
    "Item Code": "1358RB",
    "Item Name": "RUBBER BASE BLACK DIA 2.5/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1icSM4mg-w83H3Nl0v6M7RsIhBdDbXAIy",
    "Product Image1": "./images/1358RB.png"
  },
  {
    "Item Code": "1359RB",
    "Item Name": "RUBBER BASE BLACK DIA 3/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1R8iUjnoXhz_gulnRjCXqxYYjRyr16MnS",
    "Product Image1": "./images/1359RB.png"
  },
  {
    "Item Code": "1360RB",
    "Item Name": "RUBBER BASE BLACK DIA 3.5/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Uz1vRO1OEJhXQMpHsqLNuWpw19CxN-PK",
    "Product Image1": "./images/1360RB.png"
  },
  {
    "Item Code": "1361RB",
    "Item Name": "RUBBER BASE BLACK DIA 2/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xJdt65oJhRR8DqjgubdrElPnvQoBIm5-",
    "Product Image1": "./images/1361RB.png"
  },
  {
    "Item Code": "1362RB",
    "Item Name": "RUBBER BASE BLACK DIA 4/"/"",
    "Category": "CASTING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JcWxf-25h9zAEPySuE7wDqREfODyrKnQ",
    "Product Image1": "./images/1362RB.png"
  },
  {
    "Item Code": "1363IM",
    "Item Name": "INGOT MOULD 5 IN 1 50-100-200-300-500GM",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14JTzByACODNk0ACvVcb0hghXKZLBk6jN",
    "Product Image1": "./images/1363IM.png"
  },
  {
    "Item Code": "1364RM",
    "Item Name": "RING MANDREL 1 X 12 INCH",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Aj6PEHaaMI6jDjF26WtxaKdibUcIyXPL",
    "Product Image1": "./images/1364RM.png"
  },
  {
    "Item Code": "1365BM",
    "Item Name": "BAZEL MANDREL FANCY",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1nZICl7GXAI39iL16x0_59n-wR9iJu3Xp",
    "Product Image1": "./images/1365BM.png"
  },
  {
    "Item Code": "1366WC",
    "Item Name": "WOODEN CUPOLA PUNCH DIE & SET",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aUsQgXXfLasZxr40WflSlb-gc39jtg94",
    "Product Image1": "./images/1366WC.png"
  },
  {
    "Item Code": "1367CR",
    "Item Name": "7 CVT ROUND WOOD BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YumPjGm8bwPYJpE3qaVkeXd16Gq2qbDp",
    "Product Image1": "./images/1367CR.png"
  },
  {
    "Item Code": "1368CT",
    "Item Name": "7 CVT TEAR DROP WOODEN BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BgJptYwTSHafQowujxZ__8bq9BPpEE8R",
    "Product Image1": "./images/1368CT.png"
  },
  {
    "Item Code": "1369CO",
    "Item Name": "11 CVT OVEL WOOD BAZE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ga8s_lgTbLMS2EwlNZdyMHzLS_LBPEQx",
    "Product Image1": "./images/1369CO.png"
  },
  {
    "Item Code": "1370HR",
    "Item Name": "HALF ROUND DOMING PUNCH & BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1YVP8GuZDD1_-82ENmtu9-VjgCaOEWQzB",
    "Product Image1": "./images/1370HR.png"
  },
  {
    "Item Code": "1371SI",
    "Item Name": "4 SHEP IN 1 BLOCK WITH PUNCH",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mUdcy84dq0MyVD-dr3y8lpQkRq-5MRGo",
    "Product Image1": "./images/1371SI.png"
  },
  {
    "Item Code": "1372CO",
    "Item Name": "7 CVT OVEL WOODEN BAZE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jfVZpyh-YTd6hbh-m0tKKWWQFmWj7ZtL",
    "Product Image1": "./images/1372CO.png"
  },
  {
    "Item Code": "1373HH",
    "Item Name": "88 HOLE HANDY BLOCK WOOD BAZE",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12C68oX9iRrsgbKOZ2LczMnjfVZJQL4bR",
    "Product Image1": "./images/1373HH.png"
  },
  {
    "Item Code": "1374GT",
    "Item Name": "GOLD TESTING STONE (82 TO 105 GM)",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1RTtZtXz9StZh3EmqKJwWd1Gtv3kUjgw3",
    "Product Image1": "./images/1374GT.png"
  },
  {
    "Item Code": "1375DT",
    "Item Name": "GOLD TESTING STONE ( 90MM X 60MM X 10MM )",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17l4v84J1aVR5Y2qOY-WrkwYnyIMGfH08",
    "Product Image1": "./images/1375DT.png"
  },
  {
    "Item Code": "1376DT",
    "Item Name": "DRAW TONG 8/"/"",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Z24iXMGVJSOV_aIAxzSacNkiwoZJ25tZ",
    "Product Image1": "./images/1376DT.png"
  },
  {
    "Item Code": "1377DT",
    "Item Name": "DRAW TONG 10/"/"",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1cz4TrhsOAdtR_et6VzPeNU507f4IbC_i",
    "Product Image1": "./images/1377DT.png"
  },
  {
    "Item Code": "1378DT",
    "Item Name": "8/"/" DRAW TONG WITH 3/"/" RING",
    "Category": "PLIERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HMGljYbEgCVlsblb1gYI1fLs_zbo50ko",
    "Product Image1": "./images/1378DT.png"
  },
  {
    "Item Code": "1379WC",
    "Item Name": "WAX CARVERS SET/6 SPECIAL",
    "Category": "FILES",
    "Product Image": "https://drive.google.com/uc?export=download&id=16BdVd-dSgwF4rzgOOsRE_-yjoG77enDO",
    "Product Image1": "./images/1379WC.png"
  },
  {
    "Item Code": "1380MP",
    "Item Name": "8/"/" MULTI PURPOSE FORMING BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1TOQhOW9yDpv1ITvEu841L8QRsKpchIRr",
    "Product Image1": "./images/1380MP.png"
  },
  {
    "Item Code": "1381MP",
    "Item Name": "MULTI PURPOSE FORMING KIT W/STAND",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17Cb621IHcquaKYouzrLEbpdMwA7cTGo1",
    "Product Image1": "./images/1381MP.png"
  },
  {
    "Item Code": "1382PF",
    "Item Name": "PROFESSIONAL FORMING KIT",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PDIH7I8oikHuwc3YVoGftiWei9lRImv2",
    "Product Image1": "./images/1382PF.png"
  },
  {
    "Item Code": "1383CD",
    "Item Name": "27 CAVITY DAPPING BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1q3vCXMV8ndej88V9dzL_ZxdKpjaFn2sw",
    "Product Image1": "./images/1383CD.png"
  },
  {
    "Item Code": "1384SD",
    "Item Name": "2/"/" SQUARE DAPPING BLOCK & 6 PUNCH SET W/STAND",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1iWwbn67uUz5VUKoEGIgAgVCD2VKH-qHN",
    "Product Image1": "./images/1384SD.png"
  },
  {
    "Item Code": "1385SD",
    "Item Name": "3/"/" SQUARE DAPPING BLOCK & 6 PUNCH SET W/STAND",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1egU0u-qvSn-_b8KCAPDUo-b7cilaqHyH",
    "Product Image1": "./images/1385SD.png"
  },
  {
    "Item Code": "1386SD",
    "Item Name": "2/"/" SQUARE DAPPING BLOCK & 18 PUNCH SET W/STAND",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dx6ZTZAa3w_oK4uFWtFX0dMeCD7dYNap",
    "Product Image1": "./images/1386SD.png"
  },
  {
    "Item Code": "1387SD",
    "Item Name": "2 1/2 SQUARE DAPPING BLOCK & 21 PUNCH SET W/STAND",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Hxivk33JlrKcVyCve4z0ECHqy-aF8J6j",
    "Product Image1": "./images/1387SD.png"
  },
  {
    "Item Code": "1388SD",
    "Item Name": "2 3/4 SQUARE DAPPING BLOCK & 26 PUNCH SET W/STAND",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WoQljMFgs_XsNwoq0hhk7eamtFLzcur6",
    "Product Image1": "./images/1388SD.png"
  },
  {
    "Item Code": "1389CS",
    "Item Name": "CUPOLA SET W/STAND",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lcS4zY-YILfE-khcPrMru4P6X1n5jemR",
    "Product Image1": "./images/1389CS.png"
  },
  {
    "Item Code": "1390MC",
    "Item Name": "MMTCL CERAMIC BLANKET",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FQ8hcWXcbI1JCtxlpWfoK5GayEf7hX6d",
    "Product Image1": "./images/1390MC.png"
  },
  {
    "Item Code": "1391IM",
    "Item Name": "INGOT MOULD BISCUIT TYPE  2 SIDE 1 KGS",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pmYO64k2ECSa-9b_78w2a2sa0pbY3ybp",
    "Product Image1": "./images/1391IM.png"
  },
  {
    "Item Code": "1392ZW",
    "Item Name": "ZINC WIRE",
    "Category": "METALS & ALLOYS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1itoQQFSm6oz-flC4bikiFjD3YQb1aPSx",
    "Product Image1": "./images/1392ZW.png"
  },
  {
    "Item Code": "1393CB",
    "Item Name": "CUPELS BLOCK 12HB ( 105 PCS )",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HvhSuYkwynf6YJbRjXO-MnwhGUkVJHsP",
    "Product Image1": "./images/1393CB.png"
  },
  {
    "Item Code": "1394MC",
    "Item Name": "MS MS CHIPIYA (60 CM 600 TO 675)",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rywbMFXn7iO-9dfqXb-pr5-kUYm3VPwu",
    "Product Image1": "./images/1394MC.png"
  },
  {
    "Item Code": "1395SM",
    "Item Name": "STAMPING MACHINE RUNNING MODEL",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JEh-qCkAoQFBc5l0nI2fxVsz9XHKb8op",
    "Product Image1": "./images/1395SM.png"
  },
  {
    "Item Code": "1396BS",
    "Item Name": "BANGLE SIZING MACHINE WITH EXTRA DESIGN COLLETS",
    "Category": "MACHINES SMALL",
    "Product Image": "https://drive.google.com/uc?export=download&id=1UQq4yxmRKzd4dZXPLvzBEloy1f3sUJqb",
    "Product Image1": "./images/1396BS.png"
  },
  {
    "Item Code": "1397SH",
    "Item Name": "SHAMPOO",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1K9WtHNtIXwu03pKfQk0D51Bv7fWhSavu",
    "Product Image1": "./images/1397SH.png"
  },
  {
    "Item Code": "1398WD",
    "Item Name": "WOODEN DAPPING PUNCH SET OF 24",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mkfVCS-KDpD-e0S98PsZKw2aiQXLcOCn",
    "Product Image1": "./images/1398WD.png"
  },
  {
    "Item Code": "1399PW",
    "Item Name": "10 PUNCHES WITH WOODEN BLOCK",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gYiCKPbHKfp4BHYjP-8S_r0hxQ8L5Xyl",
    "Product Image1": "./images/1399PW.png"
  },
  {
    "Item Code": "1400MM",
    "Item Name": "METAL MELTING FURNACE",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fMdxWwAyGC0inlskSOiMWnvTwilChUw0",
    "Product Image1": "./images/1400MM.png"
  },
  {
    "Item Code": "1401FT",
    "Item Name": "FILING TABLE",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yFw_4-X_k6uNvkNkUUtIErclmwARb91V",
    "Product Image1": "./images/1401FT.png"
  },
  {
    "Item Code": "1402CC",
    "Item Name": "CLAY CRUCIBLE A – 3/0",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qhwN0TMCMZUU4rZBfMurBGsT8ZVzOb8v",
    "Product Image1": "./images/1402CC.png"
  },
  {
    "Item Code": "1403PW",
    "Item Name": "6 PASS WIRE DRAWING MACHINE",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1B-zWBFmeyFRsSmvES7ncVKTBUtZoS75z",
    "Product Image1": "./images/1403PW.png"
  },
  {
    "Item Code": "1404DH",
    "Item Name": "6 X 3 DOUBLE HEAD WIRE AND SHEET ROLLING MACHINE",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=15_5VrfSGRPjXalR4o2unDLKWSVe59y9i",
    "Product Image1": "./images/1404DH.png"
  },
  {
    "Item Code": "1405BT",
    "Item Name": "BLU TACK BOSTIK GUM",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WAVZqqETRuHERwlsT_2-oqk92PGjeSUM",
    "Product Image1": "./images/1405BT.png"
  },
  {
    "Item Code": "1406SR",
    "Item Name": "SOLDER ROD 1.6MM ITALY",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HXoaLxGXWYUvc04DF7sVRojk852Z8hqp",
    "Product Image1": "./images/1406SR.png"
  },
  {
    "Item Code": "1407CF",
    "Item Name": "COTTON FINGER GLOVES",
    "Category": "GLOVES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gWua-wYXU6G3In_pZoXjhDR_HijuH6T1",
    "Product Image1": "./images/1407CF.png"
  },
  {
    "Item Code": "1408RC",
    "Item Name": "RED CUP CRUCIBLE MIX",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1mXIFxpocbf4nBIuuCTD3VwAYoL7Ykc4Q",
    "Product Image1": "./images/1408RC.png"
  },
  {
    "Item Code": "1409SB",
    "Item Name": "SHIMADZU BALANCE UX6200H",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1y5o5WYmOmebUlxhqQn-FZbQc4aSApSUz",
    "Product Image1": "./images/1409SB.png"
  },
  {
    "Item Code": "1410CB",
    "Item Name": "32 CM BOWLS HEAVY NST",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ozqckdP2zBO8zUR9qh9qeAy7_IpB0yvb",
    "Product Image1": "./images/1410CB.png"
  },
  {
    "Item Code": "1411SC",
    "Item Name": "S 7P CUTTER JAPAN",
    "Category": "SHEARS & CUTTERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=13vlAcR7kpkFiQwttFmRz3bdOLuWW5MAU",
    "Product Image1": "./images/1411SC.png"
  },
  {
    "Item Code": "1412SK",
    "Item Name": "SCALE 6 KGS",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=13sd7uV2jX9-CJd6q9y4hcR_VIR2RGXCZ",
    "Product Image1": "./images/1412SK.png"
  },
  {
    "Item Code": "1413AC",
    "Item Name": "ANTIGRIP 1:20 CONCENTRATED PASSIVATION FOR SILVER AND COPPER ALLOYS-250ML (OXIFEND5)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1jtdItGuluezAUyvWakBLjkKtq3z7DaRa",
    "Product Image1": "./images/1413AC.png"
  },
  {
    "Item Code": "1414CS",
    "Item Name": "CONDUCTING SALTS FOR PASSIVATING SOLUTIONS -100G (T-SALT) BATCH",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Q2IRoOXGBuMT41d441eiVYWdnX8tNkfy",
    "Product Image1": "./images/1414CS.png"
  },
  {
    "Item Code": "1415DS",
    "Item Name": "DIGITALWAAGE SCALE",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yOqao34e_BMkAzAdBJPKl55lCQUDB5dr",
    "Product Image1": "./images/1415DS.png"
  },
  {
    "Item Code": "1416PE",
    "Item Name": "PURE ELECTROLYTIC COPPER IN DROPS-PKG. 10KG (CUG)",
    "Category": "METALS & ALLOYS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Iw6U5MG-8Ev6A0ePtwHCBKHcOU5Dyh4u",
    "Product Image1": "./images/1416PE.png"
  },
  {
    "Item Code": "1417HX",
    "Item Name": "HANDHELD XRF ANALYZER (TRUEX G5)",
    "Category": "GOLD & SILVER TESTING MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=1zI5sp42DRQmku3NTB0N2h_qjmUMFHZgo",
    "Product Image1": "./images/1417HX.png"
  },
  {
    "Item Code": "1418HX",
    "Item Name": "HANDHELD XRF ANALYZER (TRUEX G7)",
    "Category": "GOLD & SILVER TESTING MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DS3zZkqVzzUjtoVXj3V4zWbh7o-elGm_",
    "Product Image1": "./images/1418HX.png"
  },
  {
    "Item Code": "1419BX",
    "Item Name": "BENCHTOP XRF ANALYZER (SCOPEX PS6)",
    "Category": "GOLD & SILVER TESTING MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=1pkvKrzlNXtho8elzEn9LWtj-nsXbguD4",
    "Product Image1": "./images/1419BX.png"
  },
  {
    "Item Code": "1420BX",
    "Item Name": "BENCHTOP XRF ANALYZER (SCOPEX PS7)",
    "Category": "GOLD & SILVER TESTING MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BICkvM926ocJ40TL6MWd2Nyn515tI9So",
    "Product Image1": "./images/1420BX.png"
  },
  {
    "Item Code": "1423AB",
    "Item Name": "VIBRA SCALE 3200/0.01 WITH DISPLAY",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1igvhGaRM8fkodQoTlVn5x2sHX7IJeIw2",
    "Product Image1": "./images/1423AB.png"
  },
  {
    "Item Code": "1421TS",
    "Item Name": "TESTING STONE (110 TO 135 GM, 150 TO 155 GM)",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_ixFdqXHiKQrrP0KKdahI2-RR66du7UK",
    "Product Image1": "./images/1421TS.png"
  },
  {
    "Item Code": "1422TS",
    "Item Name": "TESTING STONE (180 TO 185 GM, 195 TO 220 GM, 250 TO 293 GM)",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Fa4QsrhnLwpjS2bYanvS0rnkXEg9QbgQ",
    "Product Image1": "./images/1422TS.png"
  },
  {
    "Item Code": "1524MP",
    "Item Name": "MELTING PLATE 18/1",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QU2VZbKt8LolG-ksR3W6RJ1I0ngNZYx4",
    "Product Image1": "./images/1524MP.png"
  },
  {
    "Item Code": "1424MS",
    "Item Name": "MS CHIPIYA (50 CM 500 TO 577)",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1m3JcYzfwRqio6bjyKw0aZV1U_iuVVt1q",
    "Product Image1": "./images/1424MS.png"
  },
  {
    "Item Code": "1425MS",
    "Item Name": "MS CHIPIYA (45 CM 470 TO 512)",
    "Category": "TWEEZERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1kF_QCEFFxQB0JZB_MPotPELQD3V9H3ti",
    "Product Image1": "./images/1425MS.png"
  },
  {
    "Item Code": "1426CR",
    "Item Name": "CASTING REJA MIX SIZE 1 KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VDhwI9KLqi4Vp-wrJQumtb0fZbwTLpx2",
    "Product Image1": "./images/1426CR.png"
  },
  {
    "Item Code": "1427CR",
    "Item Name": "CASTING REJA MIX SIZE 2 KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xhaWCFWx7msQcaMYHTNkNVzZno_8vLfK",
    "Product Image1": "./images/1427CR.png"
  },
  {
    "Item Code": "1428CR",
    "Item Name": "CASTING REJA MIX SIZE 3 KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1AwNSK1BsiIh6qMSCzWLDLiQYJIzjfQQM",
    "Product Image1": "./images/1428CR.png"
  },
  {
    "Item Code": "1429CR",
    "Item Name": "CASTING REJA MIX SIZE 4 KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xPVcBNjwfNCheYWNqHjl0l-f2Rx9-oCS",
    "Product Image1": "./images/1429CR.png"
  },
  {
    "Item Code": "1430CR",
    "Item Name": "CASTING REJA MIX SIZE 5-6 KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=18f4wR63g19-tuOrvbAa5gplluZAxPogN",
    "Product Image1": "./images/1430CR.png"
  },
  {
    "Item Code": "1431CR",
    "Item Name": "CASTING REJA MIX SIZE 7-8 KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SALx5RnrOHERD44UofxQ-RnyXDWJ-gz9",
    "Product Image1": "./images/1431CR.png"
  },
  {
    "Item Code": "1432CR",
    "Item Name": "CASTING REJA MIX SIZE 9-10 KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=17Wj-SMSNNMB7gQjYGBvQtLjJXcnfGiQq",
    "Product Image1": "./images/1432CR.png"
  },
  {
    "Item Code": "1433CR",
    "Item Name": "CASTING REJA MIX SIZE 15 KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1JOFW3qwz_JPMScpHGauTuHVVdnC2yMdK",
    "Product Image1": "./images/1433CR.png"
  },
  {
    "Item Code": "1434CR",
    "Item Name": "CASTING REJA MIX SIZE 20 KG",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1J56HHVFJ_GehdWn1b022sUkGmExDLcuV",
    "Product Image1": "./images/1434CR.png"
  },
  {
    "Item Code": "1435DS",
    "Item Name": "DIAMOND SCALE GKTLLC",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1HoTqP6hlMjpElNMVSz2bMzaAZMvGHDkQ",
    "Product Image1": "./images/1435DS.png"
  },
  {
    "Item Code": "1436RT",
    "Item Name": "READY TO USE FLASH PLATING BATH 0.8G/L GOLD 2N COLOR 1L (GF2N.1L",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1DHG2sUnme5ugW9zS85Q7ea20YeKkNEVF",
    "Product Image1": "./images/1436RT.png"
  },
  {
    "Item Code": "1437MU",
    "Item Name": "MAKE-UP SALTS FOR READY TO USE FLASH PLATING BATH 1G/L  GOLD 2N COLOR-PKG 20G (GFS-2N)",
    "Category": "CHEMICALS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1-a58BpHAUGezECsIa_EgKnkNDE-yNu-J",
    "Product Image1": "./images/1437MU.png"
  },
  {
    "Item Code": "1438RR",
    "Item Name": "RED REZI W12350",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1GysEESGp4izPCJh14O06QkjK9hqTissz",
    "Product Image1": "./images/1438RR.png"
  },
  {
    "Item Code": "1439RR",
    "Item Name": "RED REZI W16200",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gWLQMpWpFwS-0QE7y6wrPFFf9uVOMXa1",
    "Product Image1": "./images/1439RR.png"
  },
  {
    "Item Code": "1440RR",
    "Item Name": "RED REZI  W19150",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1bVBlv7f38yOfpn8l5oJUutAOQmyZ7b1U",
    "Product Image1": "./images/1440RR.png"
  },
  {
    "Item Code": "1441RR",
    "Item Name": "RED REZI W27250",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1WReiy0eMLOKanHm1cQO7PcXj6BL02s3v",
    "Product Image1": "./images/1441RR.png"
  },
  {
    "Item Code": "1442RR",
    "Item Name": "RED REZI W27850",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14Vr0Jpmpl85NuhW7v_1EEM32ktv8mJv2",
    "Product Image1": "./images/1442RR.png"
  },
  {
    "Item Code": "1443RR",
    "Item Name": "RED REZI A-22200",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=16Nl_SjvIgAUagTC7Uq15H4Ue_zKwVjz2",
    "Product Image1": "./images/1443RR.png"
  },
  {
    "Item Code": "1444RR",
    "Item Name": "RED REZI B-31450",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1u2pOpMofMynAe0aaTJCO_C7BEk3kECVi",
    "Product Image1": "./images/1444RR.png"
  },
  {
    "Item Code": "1445RR",
    "Item Name": "RED REZI W41150",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Oy6qd0Du4E-jVVg4lhEG2vQWwqwf9Z-w",
    "Product Image1": "./images/1445RR.png"
  },
  {
    "Item Code": "1446RR",
    "Item Name": "RED REZI W45200",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1a7RiGF0Uk9Hf1uzo38XlCzHWML4JUyER",
    "Product Image1": "./images/1446RR.png"
  },
  {
    "Item Code": "1447RR",
    "Item Name": "RED REZI W57700",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qsI4UuNBL1ZUolKXH9_mvUdMwQUJQtkN",
    "Product Image1": "./images/1447RR.png"
  },
  {
    "Item Code": "1448RR",
    "Item Name": "RED REZI W63350",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fry-UKpPVK6y5U5Nmhwxgpy5HsVh5lEM",
    "Product Image1": "./images/1448RR.png"
  },
  {
    "Item Code": "1449RR",
    "Item Name": "RED REZ W95150",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1L6o23XgLr2GLkshyL6a8oVB-yRYumDYR",
    "Product Image1": "./images/1449RR.png"
  },
  {
    "Item Code": "1450RR",
    "Item Name": "RED REZI W59450",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sAmHGs4D6xvdiJZpl_UG7ZVDYecXkRNh",
    "Product Image1": "./images/1450RR.png"
  },
  {
    "Item Code": "1451IG",
    "Item Name": "IC4000 Gold Bar Machine",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZBnRs-rJ4vmPG3dce8_bKgubhvijxyU8",
    "Product Image1": "./images/1451IG.png"
  },
  {
    "Item Code": "1452IM",
    "Item Name": "INGOT MOULD FOR 4KG GOLD BAR",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Ec-2fh_Zsx038cnxk_DBuF4i8E1Av0le",
    "Product Image1": "./images/1452IM.png"
  },
  {
    "Item Code": "1453SC",
    "Item Name": "Steam Cleaner 20 It",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1sTIAgfg6t1bOwknrRhtIzUjkSHir2w1k",
    "Product Image1": "./images/1453SC.png"
  },
  {
    "Item Code": "1454SS",
    "Item Name": "Single Side Sink With Pump",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fZmzODn0nVnn83gUqSMJBcjHIpGGHQSu",
    "Product Image1": "./images/1454SS.png"
  },
  {
    "Item Code": "1455WS",
    "Item Name": "Washing Sin Double With Engine",
    "Category": "CLEANING AND FINISHING  MACHINES & ACCESSORIES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1A9JbWtTt4kLE0KKqrW4NgUdi1s4xXGgs",
    "Product Image1": "./images/1455WS.png"
  },
  {
    "Item Code": "1456MP",
    "Item Name": "MINI PLATING MACHINE",
    "Category": "PLATING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1IwXM2D8WtklHWYsXqB5jKrULcKIt5zqq",
    "Product Image1": "./images/1456MP.png"
  },
  {
    "Item Code": "1457OT",
    "Item Name": "OIL TANK",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1W68Y2S5I9MBmM23oKlXxFOBEngw0AX1O",
    "Product Image1": "./images/1457OT.png"
  },
  {
    "Item Code": "1458MS",
    "Item Name": "MH SCALE",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1n2etTrvMjza7LHfwFD-mJagn5FBtjJj2",
    "Product Image1": "./images/1458MS.png"
  },
  {
    "Item Code": "1229PL",
    "Item Name": "PASTA LUXOR WHITE",
    "Category": "POLISHING COMPOUNDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1G-S_ugEo5MfahrnxhoMNmlRjlfK-OIxU",
    "Product Image1": "./images/1229PL.png"
  },
  {
    "Item Code": "1459ST",
    "Item Name": "SCALE3200GR TG",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hXc1dlSp-dBGm_j6p8vkd6ppxa3YPYI4",
    "Product Image1": "./images/1459ST.png"
  },
  {
    "Item Code": "1460KA",
    "Item Name": "KATHODE ALEX KJ",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=15aIcyr9I7Eq6Zus7vUbEJxY2cuVcG8tM",
    "Product Image1": "./images/1460KA.png"
  },
  {
    "Item Code": "1461PM",
    "Item Name": "PROFESSIONAL MINI SCALE 2011",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rVY45wzl60FzjAJ-sWnKO25_a9ejR9et",
    "Product Image1": "./images/1461PM.png"
  },
  {
    "Item Code": "1462DS",
    "Item Name": "DIGITAL SCALE 500 G X 0.01G",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xd5dRbacgIe-dVuCN02gBOS5r2PQKhUr",
    "Product Image1": "./images/1462DS.png"
  },
  {
    "Item Code": "1463SW",
    "Item Name": "SOLDERING WATER NST",
    "Category": "SOLDERING ITEMS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Wa13b9W1dD5HZo5Lpr_YiGTDFCaL4t6V",
    "Product Image1": "./images/1463SW.png"
  },
  {
    "Item Code": "1464NS",
    "Item Name": "NEW SINGLE WORKBENCH WITH PLEXI GLASS",
    "Category": "POLISHING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=13rWMkd03-aMHDN_gFv-W4M4oQ_IqzhVt",
    "Product Image1": "./images/1464NS.png"
  },
  {
    "Item Code": "1465CC",
    "Item Name": "CLAY CRUCIBLE A - 200",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1qsxIxqvbSO9LBdSiDP6pwNCSQAvREEmq",
    "Product Image1": "./images/1465CC.png"
  },
  {
    "Item Code": "1466MR",
    "Item Name": "MINI ROLLING MACHINE ( HEAVY )",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=12g2wfHU8_fhc8Mrusv_pb5ExSgPd9AQL",
    "Product Image1": "./images/1466MR.png"
  },
  {
    "Item Code": "1467AI",
    "Item Name": "ALL IN ONE DOUBLE SIDE",
    "Category": "INGOT MOULDS",
    "Product Image": "https://drive.google.com/uc?export=download&id=192yxzUNwam-zgknlL6EGZu04PnT_d6LX",
    "Product Image1": "./images/1467AI.png"
  },
  {
    "Item Code": "1468MF",
    "Item Name": "MELTING FURNACE N.G 1",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1vZlXRdO3zgO-EZ3YKXw0eIzE9BVcJLvg",
    "Product Image1": "./images/1468MF.png"
  },
  {
    "Item Code": "1469MF",
    "Item Name": "MELTING FURNACE N.G 2",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lZOpB8AHTuuri9ahhxogXxwWaJKiMjKi",
    "Product Image1": "./images/1469MF.png"
  },
  {
    "Item Code": "1470MF",
    "Item Name": "MELTING FURNACE N.G 3",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hz0A3OEuxUbL6H75DfM1xhwVa7wfDDsK",
    "Product Image1": "./images/1470MF.png"
  },
  {
    "Item Code": "1471DM",
    "Item Name": "DRILL MACHINE 5/8",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Y8K0S-IMbfDOh3zQdoSXX5n2M-34YmnE",
    "Product Image1": "./images/1471DM.png"
  },
  {
    "Item Code": "1472TS",
    "Item Name": "TESTING STONE 1.5 X 2.5 X 12MM",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=16wAm7bthD4GVfL2ngjA3pFJox5SKbX4t",
    "Product Image1": "./images/1472TS.png"
  },
  {
    "Item Code": "1473TS",
    "Item Name": "TESTING STONE 2 X 3 X 12MM",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1BfiKXl5PLgMB-5f4RJsyMZ_FKy8LBf8A",
    "Product Image1": "./images/1473TS.png"
  },
  {
    "Item Code": "1474TS",
    "Item Name": "TESTING STONE 3.5 X 2.5 X 12MM",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1GqLk-UY_0eq9N4KSCOR2vS3_-aDwKMEE",
    "Product Image1": "./images/1474TS.png"
  },
  {
    "Item Code": "1475HS",
    "Item Name": "HANDEL SCOOP SMALL",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1MjHqZzV1NH-gTjVUYW3_nZ5qUtambMj_",
    "Product Image1": "./images/1475HS.png"
  },
  {
    "Item Code": "1476HS",
    "Item Name": "HANDEL SCOOP MEDIUM",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ktSP93R8awTu2Kg7DZzuNomSLG-XADQR",
    "Product Image1": "./images/1476HS.png"
  },
  {
    "Item Code": "1477HS",
    "Item Name": "HANDEL SCOOP BIG",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lDaWpcH_Cpc4-buwuTIRraYjCWWeUnFv",
    "Product Image1": "./images/1477HS.png"
  },
  {
    "Item Code": "1478DG",
    "Item Name": "DEGREE GUAGE 0 TO 10 CROME",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fjiUqks9tsCBXXQZRESap33LuJ4ESmvr",
    "Product Image1": "./images/1478DG.png"
  },
  {
    "Item Code": "1479DG",
    "Item Name": "DEGREE GUAGE 0 TO 72 SETTING",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LkmMWdZxqelrP3XeEFi8ouH0fhQVY5IG",
    "Product Image1": "./images/1479DG.png"
  },
  {
    "Item Code": "1480AR",
    "Item Name": "ANVIL ROUND & POLISHED HORNS (500 grams)",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1do3Xze2Yy0gFETO5wsNFNEUus9k3d-Y8",
    "Product Image1": "./images/1480AR.png"
  },
  {
    "Item Code": "1481PW",
    "Item Name": "24 PCS WOOD PUNCH WITH 58MM WOOD BLOCK SET",
    "Category": "FORMING AND SHAPPING TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uL9-Qli533RNsmIO6hk4rFDknX8mW--I",
    "Product Image1": "./images/1481PW.png"
  },
  {
    "Item Code": "1483LF",
    "Item Name": "LEAD FOIL",
    "Category": "METALS & ALLOYS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1hK2GwnUe-vOddSmEbCjbxOMvmsM7UWoU",
    "Product Image1": "./images/1483LF.png"
  },
  {
    "Item Code": "1484RM",
    "Item Name": "ROLLING MILL 125MM (ITALY MODEL)",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ztuy6Nb2smiw0gk8n1NRt9zqfDbuOd5x",
    "Product Image1": "./images/1484RM.png"
  },
  {
    "Item Code": "1485MM",
    "Item Name": "MINI MACHINE WITH A STAND",
    "Category": "WIRE AND SHEET ROLLING MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1MXllQgH6i_r8GOhHBYwrhGDuv0ceScGI",
    "Product Image1": "./images/1485MM.png"
  },
  {
    "Item Code": "1486DH",
    "Item Name": "DRYER HEATER MACHINE 12KG",
    "Category": "DRYER MACHINES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1PBS5SgSKQ2tGn0EQCt0jH1QN5iGLQrEX",
    "Product Image1": "./images/1486DH.png"
  },
  {
    "Item Code": "1487FS",
    "Item Name": "NUMBER SET 1/16",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1j7543fwkceFRqg8jl0axHpZcSE3f4nMq",
    "Product Image1": "./images/1487FS.png"
  },
  {
    "Item Code": "1488FS",
    "Item Name": "NUMBER SET 1/32",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1LUKFSoESUc-RKW7Av-1cvNcax3QQzTyL",
    "Product Image1": "./images/1488FS.png"
  },
  {
    "Item Code": "1489FS",
    "Item Name": "LETTER SET 1/16",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1tszXi9nQk4w0pNM02q9ym7cTCzcfw0V5",
    "Product Image1": "./images/1489FS.png"
  },
  {
    "Item Code": "1490FS",
    "Item Name": "LETTER SET 1/32",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1KQyFY88Kum9uXRx0u7qcp5r6MPbUI6rp",
    "Product Image1": "./images/1490FS.png"
  },
  {
    "Item Code": "1491HV",
    "Item Name": "HAND VICE 3",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1_cxQzmpSLNGI9x1nJN6SE5DoK7auC8N_",
    "Product Image1": "./images/1491HV.png"
  },
  {
    "Item Code": "1492HV",
    "Item Name": "HAND VICE 4",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Onkyom71va5RH0d0lz6EtG6UkOntflqH",
    "Product Image1": "./images/1492HV.png"
  },
  {
    "Item Code": "1493HV",
    "Item Name": "HAND VICE 5",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1fAc9oh3hCIIBFascNCCq6-AtXC7zYTFr",
    "Product Image1": "./images/1493HV.png"
  },
  {
    "Item Code": "1494FG",
    "Item Name": "FAN GAUGE 3 ARM",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1rwq_vYk1pMlCXchFvHsi11C6LsCkf8Pi",
    "Product Image1": "./images/1494FG.png"
  },
  {
    "Item Code": "1495KS",
    "Item Name": "KRISTEEL SWG RULES WIRE GAUGE RECTANGULAR",
    "Category": "MEASURMENT TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1of0W_PdJsZSrDpjG4A8gUKEqLPp2RYTD",
    "Product Image1": "./images/1495KS.png"
  },
  {
    "Item Code": "1496JI",
    "Item Name": "JILLASAN 4/0",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12U2dKurmyQU5Suo3lLzGWPzWxMk5lel1",
    "Product Image1": "./images/1496JI.png"
  },
  {
    "Item Code": "1497JI",
    "Item Name": "JILLASAN 6/0",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1dxohKQowmUY-yFUK1z0lFDBSvqi12c_p",
    "Product Image1": "./images/1497JI.png"
  },
  {
    "Item Code": "1498HB",
    "Item Name": "HAMMER BIG  PW (1637.5)",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wva4NgzbaiFlzgPeFvKcGIVWTDVd_sEi",
    "Product Image1": "./images/1498HB.png"
  },
  {
    "Item Code": "1499CL",
    "Item Name": "CUPELS 12HB L",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1SWkcHXruoF3O3sZX4W3ALicIMYgJk9AO",
    "Product Image1": "./images/1499CL.png"
  },
  {
    "Item Code": "1500HB",
    "Item Name": "HAMMER MEDIUM PW (1397.5)",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FE2WaeZxJ9ulul7-_uX8ZoPTPEdg3YNX",
    "Product Image1": "./images/1500HB.png"
  },
  {
    "Item Code": "1501HB",
    "Item Name": "HAMMER MEDIUM PW (1152.5)",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=11kwysnpyVhWzkzsB_0n1AIrXJtUBJiqo",
    "Product Image1": "./images/1501HB.png"
  },
  {
    "Item Code": "1502HB",
    "Item Name": "HAMMER SMALL PW (885)",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=12ncG7LwbWOeibRSurZ0J8fKZTtbnwBy3",
    "Product Image1": "./images/1502HB.png"
  },
  {
    "Item Code": "1503HB",
    "Item Name": "HAMMER SMALL PW (627.5)",
    "Category": "HAND AND BENCH TOOLS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1Oy9zxcnYQcQQYaRWauENTKZ09qfiVv0s",
    "Product Image1": "./images/1503HB.png"
  },
  {
    "Item Code": "1504CC",
    "Item Name": "CLAY CRUCIBLE A-80",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1MX8yIz7ZCFJo3E2pWSb_WXkSOwHuxA7I",
    "Product Image1": "./images/1504CC.png"
  },
  {
    "Item Code": "1505MG",
    "Item Name": "METAL GRANULATING MACHINE MODEL NUMBER : SPB-JL25",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1uT4IcWHC1pzotOjzu1DA__avziN92NPO",
    "Product Image1": "./images/1505MG.png"
  },
  {
    "Item Code": "1506SM",
    "Item Name": "6kg - 0.1g scale 8423100000 M.ES.G6000",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1aXvOdBjL5wll2EtPNzPCRBQevoGMP3sM",
    "Product Image1": "./images/1506SM.png"
  },
  {
    "Item Code": "1507SM",
    "Item Name": "2000G Scale, 0.01g 8423100000 M.ES.G2000",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1QrgsjadjTWCmkxPfn-f82ruTXe82enzQ",
    "Product Image1": "./images/1507SM.png"
  },
  {
    "Item Code": "1508SM",
    "Item Name": "500g/0.01g scale 8423100000 M.ES.G0500",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1gn-S_wYtxSfME2kTqmYib_kDXjh-pslS",
    "Product Image1": "./images/1508SM.png"
  },
  {
    "Item Code": "1509PT",
    "Item Name": "Power torch 3 in 1 Big F103-J with laser White, yellow, purple 9405499000 T.JD.00026",
    "Category": "DETECTORS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1g41tnouZZJ9Fb0WWm7oOMUlwng38nfv2",
    "Product Image1": "./images/1509PT.png"
  },
  {
    "Item Code": "1510PT",
    "Item Name": "Power torch 3 in 1 big F103-H without laser White, yellow, purple 9405499000 T.JD.00027",
    "Category": "DETECTORS",
    "Product Image": "https://drive.google.com/uc?export=download&id=14zgPQT1HTQe1MAWZuSmqjuM2Rfx-4WjW",
    "Product Image1": "./images/1510PT.png"
  },
  {
    "Item Code": "1511PT",
    "Item Name": "Power torch 3 in 1 small JY-78X White, yellow, purple 9405499000 T.JD.00028",
    "Category": "DETECTORS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1VGqd2NugmXZsRwX_lI0FRa26vF0tLw4K",
    "Product Image1": "./images/1511PT.png"
  },
  {
    "Item Code": "1512ES",
    "Item Name": "2000g Electrical Scale 8423100000 M.ES.YP2002",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1lpYGP4B-RLL7-_Q1ky7FXtyoAcYIBqy4",
    "Product Image1": "./images/1512ES.png"
  },
  {
    "Item Code": "1513ES",
    "Item Name": "3000g Electrical Scale 8423100000 M.ES.YP3002",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1io4_H_P4xHqq0OlTwOBPzAlNyAJkrfvA",
    "Product Image1": "./images/1513ES.png"
  },
  {
    "Item Code": "1514MM",
    "Item Name": "Mini melting furnace 8514200090 M.MF.ML002T-1",
    "Category": "FURNACES",
    "Product Image": "https://drive.google.com/uc?export=download&id=110Le18NaoblU1FF-anLPmAH5S3eh9Vf-",
    "Product Image1": "./images/1514MM.png"
  },
  {
    "Item Code": "1515HW",
    "Item Name": "1HP Water Chiller 8418699090 M.CLW.CLX-1000",
    "Category": "CHILLERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1wYFYfpyjbWnScIfyDp0oMZagXBnPT2T2",
    "Product Image1": "./images/1515HW.png"
  },
  {
    "Item Code": "1516PS",
    "Item Name": "200g pocket digital scale 8423100000 M.ES.F0200-4",
    "Category": "SCALES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1FMYpVOiwBbhb7PSLZnEx1abvni-ZL-gH",
    "Product Image1": "./images/1516PS.png"
  },
  {
    "Item Code": "1517WC",
    "Item Name": "10P water chiller(double inlet and double outlet) 8418699090 M.CLW.10000-SSB",
    "Category": "CHILLERS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1x5MaSBirFE6BuSgvdue7iVJwQN5x1FK-",
    "Product Image1": "./images/1517WC.png"
  },
  {
    "Item Code": "1518NT",
    "Item Name": "NECKLACE THREAD",
    "Category": "DISPLAY & PACKAGING",
    "Product Image": "https://drive.google.com/uc?export=download&id=17b1IW8N5-Ja_DT8EUUW8XC_rJLcwrzsa",
    "Product Image1": "./images/1518NT.png"
  },
  {
    "Item Code": "1519IN",
    "Item Name": "INGOT 295X150X48",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1h_CuSjhopsTsDzxmr13oJKzj9vWxFOGu",
    "Product Image1": "./images/1519IN.png"
  },
  {
    "Item Code": "1520CO",
    "Item Name": "COVER 285X150X14",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1ZlCSd7vUnffTiNOszS561hLZscyeFvyL",
    "Product Image1": "./images/1520CO.png"
  },
  {
    "Item Code": "1521IN",
    "Item Name": "INGOT 279X143X45",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=198LjF0_e08O7_Vap0dgHjFDCX9myDxAg",
    "Product Image1": "./images/1521IN.png"
  },
  {
    "Item Code": "1522CO",
    "Item Name": "COVER 279X143X17",
    "Category": "CRUCIBLES",
    "Product Image": "https://drive.google.com/uc?export=download&id=1yPXyjT09ui3N1OTmIsEZ9lcOGZqV_BEc",
    "Product Image1": "./images/1522CO.png"
  },
  {
    "Item Code": "1523PM",
    "Item Name": "PMV PRO WITH SMALL, LARGE AND BULLION WANDS",
    "Category": "GOLD & SILVER TESTING MACHINE",
    "Product Image": "https://drive.google.com/uc?export=download&id=133M6iq7yujkLqGn7UbcEx57OZmtB2x5K",
    "Product Image1": "./images/1523PM.png"
  },
  {
    "Item Code": "1525PM",
    "Item Name": "4MMX 2.5MM BLUE COLOR RTECH KOREA",
    "Category": "SPARE PARTS",
    "Product Image": "https://drive.google.com/uc?export=download&id=1xnXqixlFH8oCl5MsXikvClL_ub0s6sSq",
    "Product Image1": "./images/1525PM.png"
  }
]