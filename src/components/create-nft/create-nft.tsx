import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Input from '@/components/ui/forms/input';
import Textarea from '@/components/ui/forms/textarea';
import InputLabel from '@/components/ui/input-label';
import ToggleBar from '@/components/ui/toggle-bar';
import { ChevronDown } from '@/components/icons/chevron-down';
import { Unlocked } from '@/components/icons/unlocked';
// images
import NFT1 from '@/assets/images/nft/nft-1.jpg';

const BlockchainOptions = [
  {
    id: 1,
    name: 'Ethereum',
    value: 'ethereum',
    icon: <Ethereum />,
  },
  {
    id: 2,
    name: 'Flow',
    value: 'flow',
    icon: <Flow />,
  },
];

export default function CreateNFT() {
  let [publish, setPublish] = useState(true);
  let [explicit, setExplicit] = useState(false);
  let [unlocked, setUnlocked] = useState(false);
  let [priceType, setPriceType] = useState('fixed');
  let [blockchain, setBlockChain] = useState(BlockchainOptions[0]);
  let [cpus, setCPUs] = useState('');
  let [ram, setRAM] = useState('');
  let [storage, setStorage] = useState('');
  let [selectedRegion, setSelectedRegion] = useState('');

  return (
    <>
      <NextSeo
        title="Launch"
        description="GPU-Enabled Jupyter Notebook Deployment Platform"
      />
      <div className="mx-auto w-full sm:pt-0 lg:px-8 xl:px-10 2xl:px-0">
        {/* ...Other parts of your code... */}
        
        {/* CPUs */}
        <div className="mb-4">
          <InputLabel title="CPUs" important />
          <Input type="number" placeholder="Enter number of CPUs" onChange={(e) => setCPUs(e.target.value)} />
        </div>

        {/* RAM */}
        <div className="mb-4">
          <InputLabel title="RAM" important />
          <Input type="number" placeholder="Enter RAM" onChange={(e) => setRAM(e.target.value)} />
        </div>

        {/* Storage */}
        <div className="mb-4">
          <InputLabel title="Storage" important />
          <Input type="number" placeholder="Enter storage" onChange={(e) => setStorage(e.target.value)} />
        </div>

        {/* Region */}
        <div className="mb-4">
          <InputLabel title="Region" important />
          <Input type="text" placeholder="Enter region" onChange={(e) => setSelectedRegion(e.target.value)} />
        </div>

        {/* ... Other fields ... */}
        
        <Button shape="rounded">CREATE</Button>
      </div>
    </>
  );
}
