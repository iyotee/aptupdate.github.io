clear
cyan='\033[0;36m'
green='\033[0;32m'
orange='\033[0;33m'
NC='\033[0m'

Year=`date +%Y`
Month=`date +%m`
Day=`date +%d`
Hour=`date +%H`
Minute=`date +%M`
Second=`date +%S`
printf "\n"
echo -e "${cyan}=======================================================================================================${NC}"
echo "Current Date is: $Day-$Month-$Year"
echo "Current Time is: $Hour:$Minute:$Second"
echo -e "${cyan}==================================== S T A R T I N G   S C R I P T ====================================${NC}"
printf "\n\n\n"
echo -e "${cyan}___________ WE ARE GOING TO FULLY UPGRADE YOUR SYSTEM AND INSTALL OPEN MEDIA VAULT FOR YOU ! __________${NC}"
printf "\n"
sleep 1
echo -e "${orange} 1/2 --> Full-upgrade system${NC}"
sleep 1
echo -e "${orange} 2/2 --> Install Open Media Vault with the last version${NC}"
sleep 1
echo -e "${cyan}_______________________________________________________________________________________________________${NC}"
printf "\n"
printf "\n Starting in "
for (( counter=3; counter>0; counter-- ))
do
sleep 1
printf " ... $counter "
done
printf "\n"
sudo curl https://iyotee.github.io/apt.sh | sudo bash
clear
printf "\n"
echo -e "${green}UPGRADING SYSTEM SUCCESSFULLY THE $Day-$Month-$Year AT $Hour:$Minute:$Second${NC}"
echo -e "${green}============================================================${NC}"
sleep 2
printf "\n"
printf "${green} 1/2 --> Upgrading system\t...DONE${NC}"
printf "\n"
for (( counter=2; counter>0; counter-- ))
do
sleep 1
done
echo -e "${orange} 2/2 --> Now Installing Open Media Vault with the last version, please wait until done${NC}"
printf "\n"
printf "\n Starting in "
for (( counter=3; counter>0; counter-- ))
do
sleep 1
printf " ... $counter "
done
printf "\n"
echo -e "${cyan}=================== S T A R T I N G   O  M  V   I N S T A L A T I O N  ==============================${NC}"
printf "\n"
echo -e "${cyan}The script will auto-reboot after the installation.${NC}"
printf "\n"
sleep 2
sudo curl -sSL https://github.com/OpenMediaVault-Plugin-Developers/installScript/raw/master/install | sudo bash

