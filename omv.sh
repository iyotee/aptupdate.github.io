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
echo `date`
echo "Current Date is: $Day-$Month-$Year"
echo "Current Time is: $Hour:$Minute:$Second"
echo -e "${cyan}=========== S T A R T I N G   S C R I P T ==================${NC}"
for (( counter=3; counter>0; counter-- ))
do
sleep 1
echo -n "\n ."
done
printf "\n"
echo -e "${orange}upgrading system, please wait until done${NC}"
sudo curl https://iyotee.github.io/apt.sh | sudo bash
echo -e "${green}UPGRADING SYSTEM SUCCESSFULLY${NC}"
for (( counter=3; counter>0; counter-- ))
do
sleep 1
echo -n "\n ."
done
echo -e "${cyan}=========== S T A R T I N G       O  V  M      I N S T A L A T I O N     ==================${NC}"
sudo curl -sSL https://github.com/OpenMediaVault-Plugin-Developers/installScript/raw/master/install | sudo bash
echo -e "${green}O V M is successfully installed${NC}"
