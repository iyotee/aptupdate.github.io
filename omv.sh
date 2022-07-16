cyan='\033[0;36m'
green='\033[0;32m'
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
echo "=========== S T A R T I N G   S C R I P T =================="
for (( counter=3; counter>0; counter-- ))
do
echo -n "\n ."
done
printf "\n"
echo "upgrading system, please wait until done"
sudo curl https://iyotee.github.io/apt.sh | sudo bash
echo "upgrading system finished successfully"
for (( counter=3; counter>0; counter-- ))
do
echo -n "\n ."
done
echo "=========== S T A R T I N G       O  V  M      I N S T A L A T I O N     =================="
sudo curl -sSL https://github.com/OpenMediaVault-Plugin-Developers/installScript/raw/master/install | sudo bash
echo "O V M is successfully installed"
