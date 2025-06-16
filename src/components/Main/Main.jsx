"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const Main = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [dob, setDob] = useState("");
  const [otp, setOtp] = useState("");
  const [otpToVerify, setOtpToVerify] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpMessage, setOtpMessage] = useState("");
  const [otpCooldown, setOtpCooldown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const Feature = ({ icon, text }) => (
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <span>{text}</span>
    </div>
  );
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        window.location.href = "https://www.gyanarthimedia.com/";
      }, 2000); // Redirect after 2 seconds

      // Clean up the timer on component unmount or when submitted changes
      return () => clearTimeout(timer);
    }
  }, [submitted]);
  const handleCloseModal = () => {
    setSubmitted(false);
  };
  const handleDobChange = (e) => {
    setDob(e.target.value);
  };
  // Define your states and corresponding cities here
  const stateCityMap = {
    "Andaman and Nicobar Islands": ["Port Blair"],
    Haryana: [
      "Faridabad",
      "Gurgaon",
      "Hisar",
      "Rohtak",
      "Panipat",
      "Karnal",
      "Sonipat",
      "Yamunanagar",
      "Panchkula",
      "Bhiwani",
      "Bahadurgarh",
      "Jind",
      "Sirsa",
      "Thanesar",
      "Kaithal",
      "Palwal",
      "Rewari",
      "Hansi",
      "Narnaul",
      "Fatehabad",
      "Gohana",
      "Tohana",
      "Narwana",
      "Mandi Dabwali",
      "Charkhi Dadri",
      "Shahbad",
      "Pehowa",
      "Samalkha",
      "Pinjore",
      "Ladwa",
      "Sohna",
      "Safidon",
      "Taraori",
      "Mahendragarh",
      "Ratia",
      "Rania",
      "Sarsod",
    ],
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tirunelveli",
      "Tiruppur",
      "Ranipet",
      "Nagercoil",
      "Thanjavur",
      "Vellore",
      "Kancheepuram",
      "Erode",
      "Tiruvannamalai",
      "Pollachi",
      "Rajapalayam",
      "Sivakasi",
      "Pudukkottai",
      "Neyveli (TS)",
      "Nagapattinam",
      "Viluppuram",
      "Tiruchengode",
      "Vaniyambadi",
      "Theni Allinagaram",
      "Udhagamandalam",
      "Aruppukkottai",
      "Paramakudi",
      "Arakkonam",
      "Virudhachalam",
      "Srivilliputhur",
      "Tindivanam",
      "Virudhunagar",
      "Karur",
      "Valparai",
      "Sankarankovil",
      "Tenkasi",
      "Palani",
      "Pattukkottai",
      "Tirupathur",
      "Ramanathapuram",
      "Udumalaipettai",
      "Gobichettipalayam",
      "Thiruvarur",
      "Thiruvallur",
      "Panruti",
      "Namakkal",
      "Thirumangalam",
      "Vikramasingapuram",
      "Nellikuppam",
      "Rasipuram",
      "Tiruttani",
      "Nandivaram-Guduvancheri",
      "Periyakulam",
      "Pernampattu",
      "Vellakoil",
      "Sivaganga",
      "Vadalur",
      "Rameshwaram",
      "Tiruvethipuram",
      "Perambalur",
      "Usilampatti",
      "Vedaranyam",
      "Sathyamangalam",
      "Puliyankudi",
      "Nanjikottai",
      "Thuraiyur",
      "Sirkali",
      "Tiruchendur",
      "Periyasemur",
      "Sattur",
      "Vandavasi",
      "Tharamangalam",
      "Tirukkoyilur",
      "Oddanchatram",
      "Palladam",
      "Vadakkuvalliyur",
      "Tirukalukundram",
      "Uthamapalayam",
      "Surandai",
      "Sankari",
      "Shenkottai",
      "Vadipatti",
      "Sholingur",
      "Tirupathur",
      "Manachanallur",
      "Viswanatham",
      "Polur",
      "Panagudi",
      "Uthiramerur",
      "Thiruthuraipoondi",
      "Pallapatti",
      "Ponneri",
      "Lalgudi",
      "Natham",
      "Unnamalaikadai",
      "P.N.Patti",
      "Tharangambadi",
      "Tittakudi",
      "Pacode",
      "O' Valley",
      "Suriyampalayam",
      "Sholavandan",
      "Thammampatti",
      "Namagiripettai",
      "Peravurani",
      "Parangipettai",
      "Pudupattinam",
      "Pallikonda",
      "Sivagiri",
      "Punjaipugalur",
      "Padmanabhapuram",
      "Thirupuvanam",
    ],
    "Madhya Pradesh": [
      "Indore",
      "Bhopal",
      "Jabalpur",
      "Gwalior",
      "Ujjain",
      "Sagar",
      "Ratlam",
      "Satna",
      "Murwara (Katni)",
      "Morena",
      "Singrauli",
      "Rewa",
      "Vidisha",
      "Ganjbasoda",
      "Shivpuri",
      "Mandsaur",
      "Neemuch",
      "Nagda",
      "Itarsi",
      "Sarni",
      "Sehore",
      "Mhow Cantonment",
      "Seoni",
      "Balaghat",
      "Ashok Nagar",
      "Tikamgarh",
      "Shahdol",
      "Pithampur",
      "Alirajpur",
      "Mandla",
      "Sheopur",
      "Shajapur",
      "Panna",
      "Raghogarh-Vijaypur",
      "Sendhwa",
      "Sidhi",
      "Pipariya",
      "Shujalpur",
      "Sironj",
      "Pandhurna",
      "Nowgong",
      "Mandideep",
      "Sihora",
      "Raisen",
      "Lahar",
      "Maihar",
      "Sanawad",
      "Sabalgarh",
      "Umaria",
      "Porsa",
      "Narsinghgarh",
      "Malaj Khand",
      "Sarangpur",
      "Mundi",
      "Nepanagar",
      "Pasan",
      "Mahidpur",
      "Seoni-Malwa",
      "Rehli",
      "Manawar",
      "Rahatgarh",
      "Panagar",
      "Wara Seoni",
      "Tarana",
      "Sausar",
      "Rajgarh",
      "Niwari",
      "Mauganj",
      "Manasa",
      "Nainpur",
      "Prithvipur",
      "Sohagpur",
      "Nowrozabad (Khodargama)",
      "Shamgarh",
      "Maharajpur",
      "Multai",
      "Pali",
      "Pachore",
      "Rau",
      "Mhowgaon",
      "Vijaypur",
      "Narsinghgarh",
    ],
    Jharkhand: [
      "Dhanbad",
      "Ranchi",
      "Jamshedpur",
      "Bokaro Steel City",
      "Deoghar",
      "Phusro",
      "Adityapur",
      "Hazaribag",
      "Giridih",
      "Ramgarh",
      "Jhumri Tilaiya",
      "Saunda",
      "Sahibganj",
      "Medininagar (Daltonganj)",
      "Chaibasa",
      "Chatra",
      "Gumia",
      "Dumka",
      "Madhupur",
      "Chirkunda",
      "Pakaur",
      "Simdega",
      "Musabani",
      "Mihijam",
      "Patratu",
      "Lohardaga",
      "Tenu dam-cum-Kathhara",
    ],
    Mizoram: ["Aizawl", "Lunglei", "Saiha"],
    Nagaland: [
      "Dimapur",
      "Kohima",
      "Zunheboto",
      "Tuensang",
      "Wokha",
      "Mokokchung",
    ],
    "Himachal Pradesh": [
      "Shimla",
      "Mandi",
      "Solan",
      "Nahan",
      "Sundarnagar",
      "Palampur",
      "Kullu",
    ],
    Tripura: [
      "Agartala",
      "Udaipur",
      "Dharmanagar",
      "Pratapgarh",
      "Kailasahar",
      "Belonia",
      "Khowai",
    ],
    "Andhra Pradesh": [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Nellore",
      "Kurnool",
      "Rajahmundry",
      "Kakinada",
      "Tirupati",
      "Anantapur",
      "Kadapa",
      "Vizianagaram",
      "Eluru",
      "Ongole",
      "Nandyal",
      "Machilipatnam",
      "Adoni",
      "Tenali",
      "Chittoor",
      "Hindupur",
      "Proddatur",
      "Bhimavaram",
      "Madanapalle",
      "Guntakal",
      "Dharmavaram",
      "Gudivada",
      "Srikakulam",
      "Narasaraopet",
      "Rajampet",
      "Tadpatri",
      "Tadepalligudem",
      "Chilakaluripet",
      "Yemmiganur",
      "Kadiri",
      "Chirala",
      "Anakapalle",
      "Kavali",
      "Palacole",
      "Sullurpeta",
      "Tanuku",
      "Rayachoti",
      "Srikalahasti",
      "Bapatla",
      "Naidupet",
      "Nagari",
      "Gudur",
      "Vinukonda",
      "Narasapuram",
      "Nuzvid",
      "Markapur",
      "Ponnur",
      "Kandukur",
      "Bobbili",
      "Rayadurg",
      "Samalkot",
      "Jaggaiahpet",
      "Tuni",
      "Amalapuram",
      "Bheemunipatnam",
      "Venkatagiri",
      "Sattenapalle",
      "Pithapuram",
      "Palasa Kasibugga",
      "Parvathipuram",
      "Macherla",
      "Gooty",
      "Salur",
      "Mandapeta",
      "Jammalamadugu",
      "Peddapuram",
      "Punganur",
      "Nidadavole",
      "Repalle",
      "Ramachandrapuram",
      "Kovvur",
      "Tiruvuru",
      "Uravakonda",
      "Narsipatnam",
      "Yerraguntla",
      "Pedana",
      "Puttur",
      "Renigunta",
      "Rajam",
      "Srisailam Project (Right Flank Colony) Township",
    ],
    Punjab: [
      "Ludhiana",
      "Patiala",
      "Amritsar",
      "Jalandhar",
      "Bathinda",
      "Pathankot",
      "Hoshiarpur",
      "Batala",
      "Moga",
      "Malerkotla",
      "Khanna",
      "Mohali",
      "Barnala",
      "Firozpur",
      "Phagwara",
      "Kapurthala",
      "Zirakpur",
      "Kot Kapura",
      "Faridkot",
      "Muktsar",
      "Rajpura",
      "Sangrur",
      "Fazilka",
      "Gurdaspur",
      "Kharar",
      "Gobindgarh",
      "Mansa",
      "Malout",
      "Nabha",
      "Tarn Taran",
      "Jagraon",
      "Sunam",
      "Dhuri",
      "Firozpur Cantt.",
      "Sirhind Fatehgarh Sahib",
      "Rupnagar",
      "Jalandhar Cantt.",
      "Samana",
      "Nawanshahr",
      "Rampura Phul",
      "Nangal",
      "Nakodar",
      "Zira",
      "Patti",
      "Raikot",
      "Longowal",
      "Urmar Tanda",
      "Morinda, India",
      "Phillaur",
      "Pattran",
      "Qadian",
      "Sujanpur",
      "Mukerian",
      "Talwara",
    ],
    Chandigarh: ["Chandigarh"],
    Rajasthan: [
      "Jaipur",
      "Jodhpur",
      "Bikaner",
      "Udaipur",
      "Ajmer",
      "Bhilwara",
      "Alwar",
      "Bharatpur",
      "Pali",
      "Barmer",
      "Sikar",
      "Tonk",
      "Sadulpur",
      "Sawai Madhopur",
      "Nagaur",
      "Makrana",
      "Sujangarh",
      "Sardarshahar",
      "Ladnu",
      "Ratangarh",
      "Nokha",
      "Nimbahera",
      "Suratgarh",
      "Rajsamand",
      "Lachhmangarh",
      "Rajgarh (Churu)",
      "Nasirabad",
      "Nohar",
      "Phalodi",
      "Nathdwara",
      "Pilani",
      "Merta City",
      "Sojat",
      "Neem-Ka-Thana",
      "Sirohi",
      "Pratapgarh",
      "Rawatbhata",
      "Sangaria",
      "Lalsot",
      "Pilibanga",
      "Pipar City",
      "Taranagar",
      "Vijainagar, Ajmer",
      "Sumerpur",
      "Sagwara",
      "Ramganj Mandi",
      "Lakheri",
      "Udaipurwati",
      "Losal",
      "Sri Madhopur",
      "Ramngarh",
      "Rawatsar",
      "Rajakhera",
      "Shahpura",
      "Shahpura",
      "Raisinghnagar",
      "Malpura",
      "Nadbai",
      "Sanchore",
      "Nagar",
      "Rajgarh (Alwar)",
      "Sheoganj",
      "Sadri",
      "Todaraisingh",
      "Todabhim",
      "Reengus",
      "Rajaldesar",
      "Sadulshahar",
      "Sambhar",
      "Prantij",
      "Mount Abu",
      "Mangrol",
      "Phulera",
      "Mandawa",
      "Pindwara",
      "Mandalgarh",
      "Takhatgarh",
    ],
    Assam: [
      "Guwahati",
      "Silchar",
      "Dibrugarh",
      "Nagaon",
      "Tinsukia",
      "Jorhat",
      "Bongaigaon City",
      "Dhubri",
      "Diphu",
      "North Lakhimpur",
      "Tezpur",
      "Karimganj",
      "Sibsagar",
      "Goalpara",
      "Barpeta",
      "Lanka",
      "Lumding",
      "Mankachar",
      "Nalbari",
      "Rangia",
      "Margherita",
      "Mangaldoi",
      "Silapathar",
      "Mariani",
      "Marigaon",
    ],
    Odisha: [
      "Bhubaneswar",
      "Cuttack",
      "Raurkela",
      "Brahmapur",
      "Sambalpur",
      "Puri",
      "Baleshwar Town",
      "Baripada Town",
      "Bhadrak",
      "Balangir",
      "Jharsuguda",
      "Bargarh",
      "Paradip",
      "Bhawanipatna",
      "Dhenkanal",
      "Barbil",
      "Kendujhar",
      "Sunabeda",
      "Rayagada",
      "Jatani",
      "Byasanagar",
      "Kendrapara",
      "Rajagangapur",
      "Parlakhemundi",
      "Talcher",
      "Sundargarh",
      "Phulabani",
      "Pattamundai",
      "Titlagarh",
      "Nabarangapur",
      "Soro",
      "Malkangiri",
      "Rairangpur",
      "Tarbha",
    ],
    Chhattisgarh: [
      "Raipur",
      "Bhilai Nagar",
      "Korba",
      "Bilaspur",
      "Durg",
      "Rajnandgaon",
      "Jagdalpur",
      "Raigarh",
      "Ambikapur",
      "Mahasamund",
      "Dhamtari",
      "Chirmiri",
      "Bhatapara",
      "Dalli-Rajhara",
      "Naila Janjgir",
      "Tilda Newra",
      "Mungeli",
      "Manendragarh",
      "Sakti",
    ],
    "Jammu and Kashmir": [
      "Srinagar",
      "Jammu",
      "Baramula",
      "Anantnag",
      "Sopore",
      "KathUrban Agglomeration",
      "Rajauri",
      "Punch",
      "Udhampur",
    ],
    Karnataka: [
      "Bengaluru",
      "Hubli-Dharwad",
      "Belagavi",
      "Mangaluru",
      "Davanagere",
      "Ballari",
      "Mysore",
      "Tumkur",
      "Shivamogga",
      "Raayachuru",
      "Robertson Pet",
      "Kolar",
      "Mandya",
      "Udupi",
      "Chikkamagaluru",
      "Karwar",
      "Ranebennuru",
      "Ranibennur",
      "Ramanagaram",
      "Gokak",
      "Yadgir",
      "Rabkavi Banhatti",
      "Shahabad",
      "Sirsi",
      "Sindhnur",
      "Tiptur",
      "Arsikere",
      "Nanjangud",
      "Sagara",
      "Sira",
      "Puttur",
      "Athni",
      "Mulbagal",
      "Surapura",
      "Siruguppa",
      "Mudhol",
      "Sidlaghatta",
      "Shahpur",
      "Saundatti-Yellamma",
      "Wadi",
      "Manvi",
      "Nelamangala",
      "Lakshmeshwar",
      "Ramdurg",
      "Nargund",
      "Tarikere",
      "Malavalli",
      "Savanur",
      "Lingsugur",
      "Vijayapura",
      "Sankeshwara",
      "Madikeri",
      "Talikota",
      "Sedam",
      "Shikaripur",
      "Mahalingapura",
      "Mudalagi",
      "Muddebihal",
      "Pavagada",
      "Malur",
      "Sindhagi",
      "Sanduru",
      "Afzalpur",
      "Maddur",
      "Madhugiri",
      "Tekkalakote",
      "Terdal",
      "Mudabidri",
      "Magadi",
      "Navalgund",
      "Shiggaon",
      "Shrirangapattana",
      "Sindagi",
      "Sakaleshapura",
      "Srinivaspur",
      "Ron",
      "Mundargi",
      "Sadalagi",
      "Piriyapatna",
      "Adyar",
    ],
    Manipur: ["Imphal", "Thoubal", "Lilong", "Mayang Imphal"],
    Kerala: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Kollam",
      "Thrissur",
      "Palakkad",
      "Alappuzha",
      "Malappuram",
      "Ponnani",
      "Vatakara",
      "Kanhangad",
      "Taliparamba",
      "Koyilandy",
      "Neyyattinkara",
      "Kayamkulam",
      "Nedumangad",
      "Kannur",
      "Tirur",
      "Kottayam",
      "Kasaragod",
      "Kunnamkulam",
      "Ottappalam",
      "Thiruvalla",
      "Thodupuzha",
      "Chalakudy",
      "Changanassery",
      "Punalur",
      "Nilambur",
      "Cherthala",
      "Perinthalmanna",
      "Mattannur",
      "Shoranur",
      "Varkala",
      "Paravoor",
      "Pathanamthitta",
      "Peringathur",
      "Attingal",
      "Kodungallur",
      "Pappinisseri",
      "Chittur-Thathamangalam",
      "Muvattupuzha",
      "Adoor",
      "Mavelikkara",
      "Mavoor",
      "Perumbavoor",
      "Vaikom",
      "Palai",
      "Panniyannur",
      "Guruvayoor",
      "Puthuppally",
      "Panamattom",
    ],
    Delhi: ["Delhi", "New Delhi"],
    "Dadra and Nagar Haveli": ["Silvassa"],
    Puducherry: ["Pondicherry", "Karaikal", "Yanam", "Mahe"],
    Uttarakhand: [
      "Dehradun",
      "Hardwar",
      "Haldwani-cum-Kathgodam",
      "Srinagar",
      "Kashipur",
      "Roorkee",
      "Rudrapur",
      "Rishikesh",
      "Ramnagar",
      "Pithoragarh",
      "Manglaur",
      "Nainital",
      "Mussoorie",
      "Tehri",
      "Pauri",
      "Nagla",
      "Sitarganj",
      "Bageshwar",
    ],
    "Uttar Pradesh": [
      "Lucknow",
      "Kanpur",
      "Firozabad",
      "Agra",
      "Meerut",
      "Varanasi",
      "Allahabad",
      "Amroha",
      "Moradabad",
      "Aligarh",
      "Saharanpur",
      "Noida",
      "Loni",
      "Jhansi",
      "Shahjahanpur",
      "Rampur",
      "Modinagar",
      "Hapur",
      "Etawah",
      "Sambhal",
      "Orai",
      "Bahraich",
      "Unnao",
      "Rae Bareli",
      "Lakhimpur",
      "Sitapur",
      "Lalitpur",
      "Pilibhit",
      "Chandausi",
      "Hardoi ",
      "Azamgarh",
      "Khair",
      "Sultanpur",
      "Tanda",
      "Nagina",
      "Shamli",
      "Najibabad",
      "Shikohabad",
      "Sikandrabad",
      "Shahabad, Hardoi",
      "Pilkhuwa",
      "Renukoot",
      "Vrindavan",
      "Ujhani",
      "Laharpur",
      "Tilhar",
      "Sahaswan",
      "Rath",
      "Sherkot",
      "Kalpi",
      "Tundla",
      "Sandila",
      "Nanpara",
      "Sardhana",
      "Nehtaur",
      "Seohara",
      "Padrauna",
      "Mathura",
      "Thakurdwara",
      "Nawabganj",
      "Siana",
      "Noorpur",
      "Sikandra Rao",
      "Puranpur",
      "Rudauli",
      "Thana Bhawan",
      "Palia Kalan",
      "Zaidpur",
      "Nautanwa",
      "Zamania",
      "Shikarpur, Bulandshahr",
      "Naugawan Sadat",
      "Fatehpur Sikri",
      "Shahabad, Rampur",
      "Robertsganj",
      "Utraula",
      "Sadabad",
      "Rasra",
      "Lar",
      "Lal Gopalganj Nindaura",
      "Sirsaganj",
      "Pihani",
      "Shamsabad, Agra",
      "Rudrapur",
      "Soron",
      "SUrban Agglomerationr",
      "Samdhan",
      "Sahjanwa",
      "Rampur Maniharan",
      "Sumerpur",
      "Shahganj",
      "Tulsipur",
      "Tirwaganj",
      "PurqUrban Agglomerationzi",
      "Shamsabad, Farrukhabad",
      "Warhapur",
      "Powayan",
      "Sandi",
      "Achhnera",
      "Naraura",
      "Nakur",
      "Sahaspur",
      "Safipur",
      "Reoti",
      "Sikanderpur",
      "Saidpur",
      "Sirsi",
      "Purwa",
      "Parasi",
      "Lalganj",
      "Phulpur",
      "Shishgarh",
      "Sahawar",
      "Samthar",
      "Pukhrayan",
      "Obra",
      "Niwai",
      "Mirzapur",
    ],
    Bihar: [
      "Patna",
      "Gaya",
      "Bhagalpur",
      "Muzaffarpur",
      "Darbhanga",
      "Arrah",
      "Begusarai",
      "Chhapra",
      "Katihar",
      "Munger",
      "Purnia",
      "Saharsa",
      "Sasaram",
      "Hajipur",
      "Dehri-on-Sone",
      "Bettiah",
      "Motihari",
      "Bagaha",
      "Siwan",
      "Kishanganj",
      "Jamalpur",
      "Buxar",
      "Jehanabad",
      "Aurangabad",
      "Lakhisarai",
      "Nawada",
      "Jamui",
      "Sitamarhi",
      "Araria",
      "Gopalganj",
      "Madhubani",
      "Masaurhi",
      "Samastipur",
      "Mokameh",
      "Supaul",
      "Dumraon",
      "Arwal",
      "Forbesganj",
      "BhabUrban Agglomeration",
      "Narkatiaganj",
      "Naugachhia",
      "Madhepura",
      "Sheikhpura",
      "Sultanganj",
      "Raxaul Bazar",
      "Ramnagar",
      "Mahnar Bazar",
      "Warisaliganj",
      "Revelganj",
      "Rajgir",
      "Sonepur",
      "Sherghati",
      "Sugauli",
      "Makhdumpur",
      "Maner",
      "Rosera",
      "Nokha",
      "Piro",
      "Rafiganj",
      "Marhaura",
      "Mirganj",
      "Lalganj",
      "Murliganj",
      "Motipur",
      "Manihari",
      "Sheohar",
      "Maharajganj",
      "Silao",
      "Barh",
      "Asarganj",
    ],
    Gujarat: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Jamnagar",
      "Nadiad",
      "Porbandar",
      "Anand",
      "Morvi",
      "Mahesana",
      "Bharuch",
      "Vapi",
      "Navsari",
      "Veraval",
      "Bhuj",
      "Godhra",
      "Palanpur",
      "Valsad",
      "Patan",
      "Deesa",
      "Amreli",
      "Anjar",
      "Dhoraji",
      "Khambhat",
      "Mahuva",
      "Keshod",
      "Wadhwan",
      "Ankleshwar",
      "Savarkundla",
      "Kadi",
      "Visnagar",
      "Upleta",
      "Una",
      "Sidhpur",
      "Unjha",
      "Mangrol",
      "Viramgam",
      "Modasa",
      "Palitana",
      "Petlad",
      "Kapadvanj",
      "Sihor",
      "Wankaner",
      "Limbdi",
      "Mandvi",
      "Thangadh",
      "Vyara",
      "Padra",
      "Lunawada",
      "Rajpipla",
      "Vapi",
      "Umreth",
      "Sanand",
      "Rajula",
      "Radhanpur",
      "Mahemdabad",
      "Ranavav",
      "Tharad",
      "Mansa",
      "Umbergaon",
      "Talaja",
      "Vadnagar",
      "Manavadar",
      "Salaya",
      "Vijapur",
      "Pardi",
      "Rapar",
      "Songadh",
      "Lathi",
      "Adalaj",
      "Chhapra",
      "Gandhinagar",
    ],
    Telangana: [
      "Hyderabad",
      "Warangal",
      "Nizamabad",
      "Karimnagar",
      "Ramagundam",
      "Khammam",
      "Mahbubnagar",
      "Mancherial",
      "Adilabad",
      "Suryapet",
      "Jagtial",
      "Miryalaguda",
      "Nirmal",
      "Kamareddy",
      "Kothagudem",
      "Bodhan",
      "Palwancha",
      "Mandamarri",
      "Koratla",
      "Sircilla",
      "Tandur",
      "Siddipet",
      "Wanaparthy",
      "Kagaznagar",
      "Gadwal",
      "Sangareddy",
      "Bellampalle",
      "Bhongir",
      "Vikarabad",
      "Jangaon",
      "Bhadrachalam",
      "Bhainsa",
      "Farooqnagar",
      "Medak",
      "Narayanpet",
      "Sadasivpet",
      "Yellandu",
      "Manuguru",
      "Kyathampalle",
      "Nagarkurnool",
    ],
    Meghalaya: ["Shillong", "Tura", "Nongstoin"],
    "Himachal Praddesh": ["Manali"],
    "Arunachal Pradesh": ["Naharlagun", "Pasighat"],
    Maharashtra: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Thane",
      "Nashik",
      "Kalyan-Dombivali",
      "Vasai-Virar",
      "Solapur",
      "Mira-Bhayandar",
      "Bhiwandi",
      "Amravati",
      "Nanded-Waghala",
      "Sangli",
      "Malegaon",
      "Akola",
      "Latur",
      "Dhule",
      "Ahmednagar",
      "Ichalkaranji",
      "Parbhani",
      "Panvel",
      "Yavatmal",
      "Achalpur",
      "Osmanabad",
      "Nandurbar",
      "Satara",
      "Wardha",
      "Udgir",
      "Aurangabad",
      "Amalner",
      "Akot",
      "Pandharpur",
      "Shrirampur",
      "Parli",
      "Washim",
      "Ambejogai",
      "Manmad",
      "Ratnagiri",
      "Uran Islampur",
      "Pusad",
      "Sangamner",
      "Shirpur-Warwade",
      "Malkapur",
      "Wani",
      "Lonavla",
      "Talegaon Dabhade",
      "Anjangaon",
      "Umred",
      "Palghar",
      "Shegaon",
      "Ozar",
      "Phaltan",
      "Yevla",
      "Shahade",
      "Vita",
      "Umarkhed",
      "Warora",
      "Pachora",
      "Tumsar",
      "Manjlegaon",
      "Sillod",
      "Arvi",
      "Nandura",
      "Vaijapur",
      "Wadgaon Road",
      "Sailu",
      "Murtijapur",
      "Tasgaon",
      "Mehkar",
      "Yawal",
      "Pulgaon",
      "Nilanga",
      "Wai",
      "Umarga",
      "Paithan",
      "Rahuri",
      "Nawapur",
      "Tuljapur",
      "Morshi",
      "Purna",
      "Satana",
      "Pathri",
      "Sinnar",
      "Uchgaon",
      "Uran",
      "Pen",
      "Karjat",
      "Manwath",
      "Partur",
      "Sangole",
      "Mangrulpir",
      "Risod",
      "Shirur",
      "Savner",
      "Sasvad",
      "Pandharkaoda",
      "Talode",
      "Shrigonda",
      "Shirdi",
      "Raver",
      "Mukhed",
      "Rajura",
      "Vadgaon Kasba",
      "Tirora",
      "Mahad",
      "Lonar",
      "Sawantwadi",
      "Pathardi",
      "Pauni",
      "Ramtek",
      "Mul",
      "Soyagaon",
      "Mangalvedhe",
      "Narkhed",
      "Shendurjana",
      "Patur",
      "Mhaswad",
      "Loha",
      "Nandgaon",
      "Warud",
    ],
    Goa: ["Marmagao", "Panaji", "Margao", "Mapusa"],
    "West Bengal": [
      "Kolkata",
      "Siliguri",
      "Asansol",
      "Raghunathganj",
      "Kharagpur",
      "Naihati",
      "English Bazar",
      "Baharampur",
      "Hugli-Chinsurah",
      "Raiganj",
      "Jalpaiguri",
      "Santipur",
      "Balurghat",
      "Medinipur",
      "Habra",
      "Ranaghat",
      "Bankura",
      "Nabadwip",
      "Darjiling",
      "Purulia",
      "Arambagh",
      "Tamluk",
      "AlipurdUrban Agglomerationr",
      "Suri",
      "Jhargram",
      "Gangarampur",
      "Rampurhat",
      "Kalimpong",
      "Sainthia",
      "Taki",
      "Murshidabad",
      "Memari",
      "Paschim Punropara",
      "Tarakeswar",
      "Sonamukhi",
      "PandUrban Agglomeration",
      "Mainaguri",
      "Malda",
      "Panchla",
      "Raghunathpur",
      "Mathabhanga",
      "Monoharpur",
      "Srirampore",
      "Adra",
    ],
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  };

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");

  // Define your courses and corresponding programs here
  const courseProgramMap = {
    Commerce: [
      "BCom (3 years)",
      "BCom Banking and Finance (3 years)",
      "BCom Financial Accounting (3 years)",
    ],
    Design: [
      " BFA (4 years)",
      "BA Animation and Design (3 years)",
      "BSc Fashion Designing (3 years)",
    ],
    MassMedia: ["BJMC (3 years)"],
    // Add more courses and programs as needed
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedProgram("");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show loader
    try {
      {
        // await axios.post(
        //   "https://sea-turtle-app-sm5l4.ondigitalocean.app/api/sendMail/gynarthi-web",
        //   {
        //     name,
        //     email,
        //     phone,
        //     dob,
        //     state: selectedState,
        //     city: selectedCity,
        //     course: selectedCourse,
        //     program: selectedProgram,
        //   }
        // );

        await axios.post("/api/gynarthi-web", {
          name,
          email,
          phone,
          dob,
          state: selectedState,
          city: selectedCity,
          course: selectedCourse,
          program: selectedProgram,
        });

        console.log("Form submission successful");
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setDob("");
        setSelectedState("");
        setSelectedCity("");
        setSelectedCourse("");
        setSelectedProgram("");
        // setOtpVerified(false);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      alert(
        "This phone number has already been used once, please try a different number.",
        error
      );
    } finally {
      setIsSubmitting(false); // Hide loader
    }
  };

  const handleNameChange = (e) => {
    const input = e.target.value;
    if (/^[A-Za-z ]+$/.test(input)) {
      setName(input);
    }
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;
    setEmail(input);
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    if (/^[0-9]{0,10}$/.test(input)) {
      setPhone(input);
    }
  };

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // const handleSendOtp = async () => {
  //     const generatedOtp = await generateOtp();
  //     await localStorage.setItem('otp', generatedOtp);
  //     const apiKey = "APIfJCi7asW85127";
  //     const message = `Dear User, Your OTP for login to MobiDoc app is ${generatedOtp}. Valid for 30 minutes. Please do not share this OTP. Regards, Team IntelGray`;
  //     const apiUrl = `https://www.bulksmsplans.com/api/send_sms?api_id=APIfJCi7asW85127&api_password=qI5sERZC&sms_type=OTP&sms_encoding=1&sender=INTLGR&number=${phone}&message=${message}&template_id=1207164447361211223`;

  //     const response = await fetch(apiUrl, {
  //         method: "GET",
  //         headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${apiKey}`,
  //         },
  //     });
  //     if (response.status === 200) {
  //         const data = await response.json();
  //         setOtpSent(true);
  //         setOtpCooldown(true);
  //         setTimeout(() => {
  //             setOtpCooldown(false);
  //         }, 10000); // 10 seconds cooldown
  //         return data;
  //     } else {
  //         console.log(response);
  //     }
  // };

  // const handleOtpChange = (e) => {
  //     setOtp(e.target.value);
  // };

  // const handleVerifyOtpChange = (e) => {
  //     setOtpToVerify(e.target.value);
  // };

  // const handleVerifyOtp = () => {
  //     const storedOtp = localStorage.getItem('otp');
  //     if (otpToVerify === storedOtp) {
  //         setOtpVerified(true);
  //         setOtpSent(false);
  //         setOtpMessage('OTP verified successfully');
  //         setTimeout(() => {
  //             setOtpMessage('');
  //         }, 3000); // Hide the message after 3 seconds
  //         console.log("OTP verified successfully");
  //     } else {
  //         alert("Invalid OTP. Please try again.");
  //         console.log("OTP verification failed");
  //     }
  // };

  return (
    <main>
      <section
        id="contact"
        className="bg-cover   bg-center flex items-center imgbc"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="text-black space-y-6  md:w-2/5 mt-12 flex flex-col justify-end">
              <h1 className="heading mb-4 text-white">
                Launch Your Creative Career - Limited Seats Available! Apply Now
              </h1>
              <p className="paragraph mb-4 text-white">
                Kickstart your career in the direction of your dreams by
                choosing the right education at Gyanarthi College. Affiliated
                with Kumaun University, we are one of the best colleges in town
                with diversified faculty and industry-specific courses in media,
                fashion, and commerce. Weave your college life around intricate
                experiences and profession-specific curriculum to empower your
                ambition.
              </p>
            </div>
            <div className="md:w-2/5 md:pl-4 bg-white rounded-2xl">
              <div className=" p-2 md:p-4 sm:p-8 rounded-md shadow-lg flex items-center justify-center flex-col">
                <h3 className="mb-4 text-black formheading">
                  GYANARTHI APPLICATION FORM{" "}
                  <span className="font-sans">2025</span>
                </h3>
                <div className="bg-[#093365] w-max  text-white p-4 mb-4 rounded-md">
                  Admissions Open Now
                </div>
                {/* {isSubmitting && (
                  <div className="loader mb-4 text-black">Sending mail...</div>
                )} */}
                <form
                  className="w-full  "
                  onSubmit={handleSubmit}
                  method="POST"
                >
                  <div className="mb-2 name">
                    <div className="flex mb-2 gap-2">
                      <div className="w-1/2">
                        <input
                          type="text"
                          className="w-full p-2 border rounded-md text-black"
                          placeholder="Full Name"
                          value={name}
                          name="fullname"
                          onChange={handleNameChange}
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <input
                          type="email"
                          name="email"
                          className="w-full p-2 border rounded-md text-black"
                          placeholder="Email"
                          value={email}
                          onChange={handleEmailChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="flex mb-2 gap-2">
                      <div className="w-1/2 ">
                        <input
                          type="tel"
                          name="phone"
                          className="w-full p-2 border rounded-md font-mono text-black"
                          placeholder="Phone"
                          value={phone}
                          onChange={handlePhoneChange}
                          required
                        />
                      </div>
                      <div className="mb-4 w-1/2">
                        <div className="w-full">
                          <input
                            type="date"
                            name="dob"
                            className="w-full p-2 border rounded-md text-black"
                            placeholder="Date of Birth"
                            value={dob}
                            onChange={handleDobChange}
                            required
                            min="1995-01-01"
                            max="2008-12-31"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className='flex flex-col md:flex-row sm:flex-row  md:flex sm:flex items-center w-full'>
                                        {phone.length === 10 && !otpVerified ? (
                                            <div className='mb-2 w-full md:w-1/4 sm:w-1/4 mr-2'>
                                                <button
                                                    type="button"
                                                    onClick={handleSendOtp}
                                                    className={`text-black md:p-5 sm:p-5 p-2  rounded w-full bg-white ${otpCooldown ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                                    disabled={otpCooldown}>
                                                    {otpCooldown ? 'Wait 10s' : 'Send OTP'}
                                                </button>
                                            </div>
                                        ) : null}
                                        {otpSent && !otpVerified && (
                                            <div className='mb-2 flex md:w-3/4 sm:w-3/4 w-full'>
                                                <input
                                                    type='text'
                                                    value={otpToVerify}
                                                    onChange={handleVerifyOtpChange}
                                                    placeholder='Enter OTP'
                                                    className='md:p-5 sm:p-5 p-2 rounded bg-white flex-grow mr-2'
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleVerifyOtp}
                                                    className={`text-black md:p-5 sm:p-5 p-2 rounded bg-white w-full ${!otpToVerify ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                                    disabled={!otpToVerify}>
                                                    Verify OTP
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    {otpMessage && (
                                        <p className='text-green-500 mb-2'>{otpMessage}</p>
                                    )} */}

                  <div className="mb-4">
                    <div className="flex mb-2">
                      <div className="w-1/2">
                        <select
                          className="w-full p-2 border rounded-md text-black"
                          onChange={handleStateChange}
                          value={selectedState}
                          name="state"
                          required
                        >
                          <option value="">Select State</option>
                          {Object.keys(stateCityMap).map((state, index) => (
                            <option key={index} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="w-1/2 pl-2">
                        <select
                          className="w-full p-2 border rounded-md text-black"
                          name="city"
                          onChange={(e) => setSelectedCity(e.target.value)}
                          value={selectedCity}
                          required
                          disabled={!selectedState}
                        >
                          <option value="">Select City</option>
                          {stateCityMap[selectedState] &&
                            stateCityMap[selectedState].map((city, index) => (
                              <option key={index} value={city}>
                                {city}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex mb-2">
                      <div className="w-1/2">
                        <select
                          className="w-full p-2 border rounded-md text-black"
                          onChange={handleCourseChange}
                          value={selectedCourse}
                          name="course"
                          required
                        >
                          <option value="">Select Course</option>
                          {Object.keys(courseProgramMap).map(
                            (course, index) => (
                              <option key={index} value={course}>
                                {course}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                      <div className="w-1/2 pl-2">
                        <select
                          className="w-full p-2 border rounded-md text-black"
                          onChange={(e) => setSelectedProgram(e.target.value)}
                          value={selectedProgram}
                          name="program"
                          disabled={!selectedCourse}
                          required
                        >
                          <option value="">Select Program</option>
                          {courseProgramMap[selectedCourse] &&
                            courseProgramMap[selectedCourse].map(
                              (program, index) => (
                                <option key={index} value={program}>
                                  {program}
                                </option>
                              )
                            )}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="flex items-center text-black">
                      <input
                        type="checkbox"
                        className="mr-2 text-black"
                        required
                      />
                      By submitting this form, I agree to receive notifications
                      from the College in the form of SMS/ E-mail/ Call.
                    </label>
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      type="submit"
                      className="homebutton rounded-xl text-white px-4 py-2 w-[30%]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "SUBMIT"}
                    </button>
                  </div>
                </form>
                {submitted && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                      <FaCheckCircle
                        size={48}
                        className="text-green-500 mb-4"
                      />
                      <p className="text-green-500 mb-4">
                        Message sent successfully, Team Gyanarthi will contact
                        you shortly!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
