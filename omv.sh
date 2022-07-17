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
echo -e "${cyan}======================================================================================================================${NC}"
echo "Current Date is: $Day-$Month-$Year"
echo "Current Time is: $Hour:$Minute:$Second"
echo -e "${cyan}=================================================== S T A R T I N G   S C R I P T ====================================${NC}"
printf "\n"
for (( counter=3; counter>0; counter-- ))
do
sleep 1
printf "\n ."
done
printf "\n"
echo -e "${cyan}___________WE ARE GOING TO FULLY UPGRADE YOUR SYSTEM AND INSTALL OPEN MEDIA VAULT FOR YOU !__________${NC}"
sleep 1
echo -e "${orange} 1/2 --> upgrading system${NC}"
sleep 3
echo -e "${orange} 2/2 --> installing Open Media Vault last version${NC}"
sleep 1
echo -e "${cyan}_____________________________________________________________________________________________________${NC}"
for (( counter=5; counter>0; counter-- ))
do
sleep 1
echo -e " . "
done
sudo curl https://iyotee.github.io/apt.sh | sudo bash
clear
echo -e "${green}UPGRADING SYSTEM SUCCESSFULLY${NC}"
sleep 2
echo -e "${green} 1/2 --> upgrading system/t ...DONE${NC}"
for (( counter=2; counter>0; counter-- ))
do
sleep 1
done
echo -e "${orange} 2/2 --> installing Open Media Vault last version, please wait until done${NC}"
for (( counter=5; counter>0; counter-- ))
do
sleep 1
printf "\n ."
done
echo -e "${cyan}============ S T A R T I N G       O  M  V      I N S T A L A T I O N (will auto-reboot after installation) =========${NC}"
sudo curl -sSL https://github.com/OpenMediaVault-Plugin-Developers/installScript/raw/master/install | sudo bash

