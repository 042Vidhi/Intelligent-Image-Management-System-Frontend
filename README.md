# **AI-Powered Image Management System**  

## **📌 Overview**  
Managing large volumes of images can be challenging, especially when it comes to **searching for relevant images quickly**. The **AI-Powered Image Management System** automates **image tagging, captioning, and retrieval** using **advanced AI models**. Unlike traditional image storage systems, this solution provides **automatic AI-generated tags** and **allows users to edit tags**, ensuring a highly personalized and flexible image organization experience.  

### **❓ Why Do We Need This?**  
🔹 **Time-saving**: Instead of manually tagging images, the system uses **AI models** to auto-generate relevant tags.  
🔹 **Smart search**: Users can search images using **natural language queries**, thanks to **semantic similarity** AI.  
🔹 **Flexible tagging**: Unlike rigid metadata storage, **tags can be edited** post-upload to refine search results.  
🔹 **Seamless cloud storage**: Images are securely stored in **Cloudinary** for fast and scalable access.  

### **🚀 What Makes It Unique?**  
✨ **AI-Powered Tagging & Captioning** – Uses AI models like **DETR and ViT-GPT2** for automatic tagging.  
✨ **Editable Tags** – Users can manually **edit tags** to improve search accuracy and personalize image organization.  
✨ **AI-Based Search** – Searches images based on **semantic meaning**, not just exact matches.  
✨ **Cloud Integration** – Uses **Cloudinary** for seamless image hosting.  
✨ **Scalability with Docker** – Fully containerized setup for easy deployment.  

### **📌 Example Scenario: Personalized Image Tagging**  

Imagine you have a **pet dog named Noddy** 🐶, and you frequently take pictures of him. When you upload an image of Noddy to the **AI-Powered Image Management System**, the AI might automatically tag it with:  

✅ **Tags generated by AI:** `"dog", "pet", "animal", "cute", "furry"`  

However, the AI doesn’t know **your pet’s name is Noddy**! To personalize the experience, you can **edit the tags** and add `"Noddy"` manually.  

✅ **Final Tags after Editing:** `"dog", "pet", "animal", "cute", "furry", "Noddy"`  

#### **🔍 Searching for "Noddy"**  
Later, when you search for `"Noddy"`, the system will instantly retrieve **all images tagged with "Noddy"**, making it super easy to find all your pet’s pictures without scrolling endlessly through your gallery.  

💡 **This feature is extremely useful for organizing photos of specific events, people, places, or objects by adding custom tags!**
---


## **✨ Features**  
✔ **AI-Powered Image Tagging & Captioning** using **AI models**  
✔ **Edit Tags** after upload for **more accurate search results**  
✔ **Cloud Storage** with **Cloudinary**  
✔ **AI-Powered Image Search** using **semantic similarity**  
✔ **REST API** for smooth integration  
✔ **Docker Support** for easy deployment  

---

## **🛠 Steps to Run the Code**  

### **🚀 Running the Backend**  

#### **1️⃣ Fork & Clone the Backend Repository**  
Repository Link : https://github.com/042Vidhi/Intelligent-Image-Management-System-Backend
```sh
git clone https://github.com/your-username/Intelligent-Image-Management-System-Backend.git
cd backend
```

#### **2️⃣ Set Up Environment Variables**  
Create a `.env` file in the backend root directory and add the necessary credentials:  

```ini
CLOUDINARY_CLOUD_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
HUGGINGFACE_API_KEY=your-huggingface-key
DATABASE_URL=postgresql://postgres:postgres@db:5432/postgres
```

#### **3️⃣ Install Dependencies**  
```sh
pip install -r requirements.txt
```

#### **4️⃣ Start the Backend with Docker**  
```sh
docker-compose up --build
```

---

### **🎨 Running the Frontend**  

#### **1️⃣ Fork & Clone the Frontend Repository**  
Repository Link : https://github.com/042Vidhi/Intelligent-Image-Management-System-Frontend
```sh
git clone https://github.com/your-username/Intelligent-Image-Management-System-Frontend.git
git checkout master
cd frontend
```

#### **2️⃣ Install Dependencies**  
```sh
npm install
```

#### **3️⃣ Start the Frontend**  
```sh
npm run dev
```

#### **7️⃣ Open in Browser**  
Visit: [`http://localhost:3000/`](http://localhost:3000/)  

---

This README **clearly explains the need, uniqueness, and features** of your AI Image Management System. Let me know if you need any tweaks! 🚀
