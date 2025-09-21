<h2 align="center">
AI Closet
</h2>

> <div align="center">
>   <sub>Thank you for checking out AI Closet! If you find it useful or interesting, consider giving this repository a <strong>star</strong> ⭐. It helps others discover the project too.</sub>
> </div>

<div align="center">
  <img src="release_assets/banner.png" alt="Hero Image Banner" width="100%" /> 
</div>


**AI Closet** is a mobile application that brings an AI-powered approach to closet management and styling. Whether you want to keep track of every piece in your closet, or seek an easy way to visualize outfit ideas, the AI Closet helps you:

- Digitally store and manage all your clothing.  
- Experiment with outfit combinations on a freeform canvas and save your favorite looks for future inspiration.

The app is built with **React Native** and **Expo**, offering a cross-platform solution for both iOS and Android. By integrating AI for automatic background removal, it reduces manual work and helps users stay organized and creative with their wardrobe.


---

### Key Features

<table max-height="400px">
  <tr>
    <td width="33%">
      <strong>Add &amp; Manage Clothing Items</strong><br />
      <ul>
        <li>Easily add clothing items from the camera or gallery.</li>
        <li>AI automatically removes backgrounds for clean item photos.</li>
        <li>Manually categorize and tag items with attributes like category, color, and season.</li>
      </ul>
    </td>
    <td width="33%" align="center">
      <img src="release_assets/all_clothes.png" alt="All Clothing Items screen" style="max-width:100%; max-height:400px;">
    </td>
    <td width="33%" align="center">
      <img src="release_assets/clothes_detail.png" alt="Clothing Item Details screen" style="max-width:100%; max-height:400px;">
    </td>
  </tr>
</table>

<br />

<table max-height="400px">
  <tr>
    <td width="33%">
      <strong>Create &amp; Save Outfits</strong><br />
      <ul>
        <li>Mix and match items on a freeform canvas, drag-and-drop to arrange the perfect look.</li>
        <li>Store finished outfits and revisit them anytime to make updates or get inspiration.</li>
        <li>Each clothing item lists the outfits it belongs to.</li>
      </ul>
    </td>
    <td width="33%" align="center">
      <img src="release_assets/all_outfits.png" alt="All Outfits screen" style="max-width:100%; max-height:400px;">
    </td>
    <td width="33%" align="center">
      <img src="release_assets/outfit_canvas.png" alt="Outfit Canvas screen" style="max-width:100%; max-height:400px;">
    </td>
  </tr>
</table>

---

### Tech Stack

<div>
  <ul>
    <li><strong>TypeScript:</strong> Primary language for safer code and better autocompletion.</li>
    <li><strong>React Native &amp; Expo:</strong> Cross-platform mobile development for iOS &amp; Android.</li>
    <li><strong>AsyncStorage &amp; expo-file-system:</strong> Local data persistence and file handling.</li>
    <li><strong>AWS Services (Planned):</strong> API Gateway, Lambda, DynamoDB, S3 for future cloud integration.</li>
  </ul>
</div>

---

### Installation and Usage

#### Option 1: Standard Installation

1. **Clone the Repository:**
   ```shell
   git clone [Your Repo URL Here]
   cd [Your Repo Name]
   ```

2. **Install Dependencies:**
   ```shell
   npm install
   ```

3. **Configure Environment:**  
   - The AI features require the following API key for background removal:
      - fal.ai API: for automatic background removal
   ```shell
   EXPO_PUBLIC_FAL_KEY = ""
   ```

4. **Run the App:**
   ```shell
   npm start
   # Use the Expo CLI to run on an emulator, simulator, or physical device
   ```

#### Option 2: Docker Installation

For a containerized setup, you can use Docker to run the web version of the app:

1. **Clone the Repository:**
   ```shell
   git clone [Your Repo URL Here]
   cd [Your Repo Name]
   ```

2. **Configure Environment:**  
   Create a `.env` file with your API key:
   ```shell
   EXPO_PUBLIC_FAL_KEY=""
   ```

3. **Run with Docker Compose:**
   ```shell
   docker-compose up --build
   ```

4. **Access the App:**
   Open your browser and navigate to `http://localhost:19006`

**Docker Commands:**
- `docker-compose up --build` - Build and start the container
- `docker-compose down` - Stop and remove the container
- `docker-compose logs -f` - View container logs

The app should now be running on your local machine. You can access it via the Expo client on your mobile device, an emulator, or through a web browser when using Docker.

---

### Architecture and Future Roadmap

<div align="center">
  <img src="release_assets/system_arch.png" alt="System Architecture Diagram" width="80%" />
  <p><em>Architecture Diagram (including both client and future cloud components)</em></p>
</div>

#### Current Implementation (Client-Side)
1. **UI Layer** – Built with React Native to support iOS and Android.  
2. **State Management Layer** – Powered by React Context API for global state.  
3. **Data Layer** – Uses AsyncStorage and <code>expo-file-system</code> for metadata and image storage.

#### Planned Cloud Components
1. **API Gateway** – Securely proxy API requests while hiding and protecting sensitive API keys.  
2. **Rate Limiting System** – AWS Lambda checks user credits before forwarding API requests; logs transactions in DynamoDB.  
3. **AI Services** – Current third-party AI services will move behind a proxy to enforce rate limits and protect API keys.

> **Note:** Currently only the client-side components are implemented. Third-party AI services reside in the client codebase. Cloud features and the credit-based system are in the planning stage.

Refer to the [design_doc](/design_doc.md) for more details on the current architecture.

### Future Features
- **Batch Clothing Upload**: Add multiple clothing items at once for faster initial closet setup.
- **Social Sharing & Export**: Easily share outfits to social media or with friends.
- **User Onboarding Screens**: Introduce new users to the app and its features.
- **Outfit Calendar**: Track daily outfits and look back at past styles.
- **Closet Analytics**: Gather insights like items per category, color distribution, etc.
- **Smart Categorization**: Implement AI-powered automatic categorization of clothing items.
- **Premium Features**: Add advanced features for power users.

---

### Productization Considerations

<div>
  <p>AI Closet focuses on <strong>wardrobe management with intelligent background removal</strong> — providing a clean, organized approach to digital closet management.</p>
</div>

#### Cost Estimation

| Service                                 | Cost/Usage      |
|-----------------------------------------|-----------------|
| **Background Removal (Birefnet)**       | \$0.002/image   |

Assuming an average user uploads 50 images per month, the estimated monthly cost per user would be around $0.10 for background removal processing. This makes the app very cost-effective to operate.

The backend AWS cost is minimal, but are crucial for implementing secure pay-as-you-go models in the future. This is included for reference:

**Backend AWS Costs** (for future cloud integrations):  
- **API Gateway**: \$3.50 for first 333M requests  
- **AWS Lambda**: \$0.20 per million requests  
- **DynamoDB**: \$0.7 per million writes, \$0.2 per million reads  

---

### Contributing

Contributions are appreciated! Whether it’s a bug fix, new feature proposal, or performance optimization. For major changes, please open an issue first to discuss what you’d like to change. This ensures alignment and helps us provide guidance.

---

### License

This project is licensed under the **MIT License**.

---

### Contact & Support

- **Issues / Bug Reports**: Please use the [GitHub Issues](#) tab for bugs or feature requests.  
- **Questions / Suggestions**: Feel free to start a discussion in the [Discussions](#) tab.

<br />
<div align="center">
  <sub>Thank you for reading! If you find AI Closet useful, consider giving this repository a <strong>star</strong> ⭐.</sub>
</div>
