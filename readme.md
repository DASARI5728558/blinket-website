Automated Server Deployment Using Native Cloud Tools

Project Overview

This project demonstrates how to automate the deployment of a web application using Microsoft Azure's native services. Infrastructure provisioning is handled through Azure Resource Manager (ARM) templates (Infrastructure as Code), and a Blinkit-inspired grocery delivery web app is version-controlled on GitHub and deployed onto Azure-hosted infrastructure.

The goal is to build a repeatable, scalable deployment pipeline with minimal manual configuration.

Key Objectives


Automate server provisioning using Azure native services
Implement Infrastructure as Code (IaC) via ARM templates
Deploy and host the web application on Azure
Integrate GitHub for version control
Reduce manual deployment effort


Project Architecture

Developer (VS Code)
        │
        ▼
GitHub Repository
        │
        ▼
ARM Template Deployment
        │
        ▼
Azure Resource Group
        │
        ▼
VM and Networking Resources
(Virtual Network, NSG, Public IP)
        │
        ▼
Hosted Web Application

The developer writes and commits code in VS Code, pushes it to a GitHub repository, which feeds into an ARM template deployment. That deployment provisions an Azure resource group, which in turn creates the VM and networking resources, ultimately resulting in the hosted web application.

Project Workflow


Development Environment (VS Code) — used for coding, git init, commits, and triggering deployment.
GitHub Repository — holds the application source code and deployment assets.
ARM Deployment Wizard — the Azure portal interface for configuring a template-based deployment.
ARM Template Editor — the actual IaC template defining the resources to provision.
Custom Deployment Portal — Azure's interface for kicking off ARM template deployments.
GitHub Repository (referenced again) — source repo with app files and deployment assets.
Hosted Web Application — the final Blinkit-style app running live on the Azure VM.


Tools and Technologies

CategoryTechnologyCloud PlatformMicrosoft AzureInfrastructure AutomationARM TemplatesComputeAzure Virtual MachineNetworkingVirtual Network, Network Security Group (NSG), Public IPSource ControlGitHubFrontendHTML, CSS, JavaScriptDevelopment ToolVisual Studio Code

Project Structure

.
├── index.html      # Main HTML file for the Blinkit-inspired web app
├── style.css       # Styling for the web application
├── script.js       # JavaScript for dynamic offer banner
└── azuredeploy.json # ARM template for infrastructure provisioning

Application Features


Modern Blinkit-style UI with grocery delivery theme
Responsive design for mobile, tablet, and desktop
Sticky navigation header with search bar
Category cards (Fruits, Dairy, Drinks, Groceries) with Font Awesome icons
Animated, rotating offer banner
Hero section with call-to-action button


Infrastructure (ARM Template)

The ARM template (azuredeploy.json) provisions the following Azure resources:


Public IP Address (Static, Standard SKU)
Network Security Group (NSG) — allows inbound traffic on:

Port 80 (HTTP)
Port 22 (SSH)



Virtual Network with a dedicated subnet linked to the NSG
Network Interface (NIC) connected to the subnet and public IP
Virtual Machine (Ubuntu 18.04 LTS, Standard_D2s_v3)
Custom Script Extension that:

Updates and upgrades system packages
Installs Nginx and Git
Enables and starts the Nginx service
Clones the application repository from GitHub
Copies the website files into /var/www/html/
Sets appropriate file permissions
Restarts Nginx to serve the application





Parameters

ParameterTypeDefaultDescriptionvmNamestringlinux-web-vmName of the virtual machineadminUsernamestringazureuserAdmin username for the VMadminPasswordsecureString—Admin password for the VM (provided at deployment)

Output

OutputDescriptionpublicIPPublic IP address of the deployed VM, used to access the hosted web app

How to Deploy


Clone the repository


bash   git clone https://github.com/<your-username>/blinket-website.git
   cd blinket-website


Deploy the ARM template via Azure Portal

Go to the Azure Portal → Create a resource → Template deployment (deploy using custom templates)
Select Build your own template in the editor
Paste the contents of azuredeploy.json
Fill in the parameters (vmName, adminUsername, adminPassword)
Select/create a resource group and region (e.g., centralindia)
Click Review + create, then Create



Wait for deployment to complete

Azure will provision the public IP, NSG, virtual network, NIC, and VM
The custom script extension will automatically install Nginx, clone the repo, and deploy the website



Access the application

Once deployment finishes, retrieve the publicIP output value
Open http://<publicIP> in a browser to view the hosted Blinkit-inspired web app





Results and Outcome

The deployment was completed successfully using Azure native cloud tools. Infrastructure provisioning, application hosting, and source control integration were automated, demonstrating a practical cloud-native deployment pipeline.

Conclusion

This project validates the effectiveness of Infrastructure as Code and Azure-native automation capabilities. Using ARM templates and GitHub integration enables reliable, repeatable, and scalable deployments while reducing operational overhead.

Author

Project by DASARI5728558
