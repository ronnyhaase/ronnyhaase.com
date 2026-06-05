import Image from "next/image";

function OpenSource() {
	return (
		<>
			<h2 className="mb-2 text-xl font-semibold">Open-Source</h2>
			<div>
				<div className="my-4">
					<a
						href="https://solfees.fyi"
						target="_blank"
						className="group float-left"
					>
						<Image
							src="/oss-solfees.png"
							width={180}
							height={180}
							alt="SOLFees.fyi"
							className="scale-90 group-active:scale-100 group-focus:scale-100 group-hover:scale-100 transition-transform"
						/>
					</a>
					<div className="grow">
						<h3 className="text-lg font-bold">SOLFees.fyi</h3>
						<p>
							SOLFees.fyi lets users enter a Solana wallet address
							or connect their wallet to see how many transactions
							they have made and how much they have paid in fees,
							then share the result.
							<br />
							I built and released it during one of Solana's most
							difficult periods after the FTX collapse, as a
							reminder of what makes Solana compelling: low fees,
							speed, and scalability.
							<br />
							The project received strong community attention on{" "}
							<a href="https://x.com/solfees_fyi">X / Twitter</a>,
							earned a Solana grant, received user donations, and
							placed third in Solana RPGF Round 1.
						</p>
					</div>
				</div>
				<div className="my-4">
					<a
						href="https://app.sunrisestake.com"
						target="_blank"
						className="group float-right"
					>
						<Image
							src="/oss-sunrisestake.png"
							width={180}
							height={180}
							alt="SunriseStake - Offset emissions while you sleep"
							className="scale-90 group-active:scale-100 group-focus:scale-100 group-hover:scale-100 transition-transform"
						/>
					</a>
					<div className="grow">
						<h3 className="text-lg font-bold">SunriseStake</h3>
						<p>
							I was one of six core contributors to Sunrise Stake,
							a Solana protocol that allowed users to stake SOL
							while directing staking rewards toward carbon
							offsets. Through Sunrise Stake, more than 20,000
							tonnes of CO2 have been retired on-chain.
							<br />
							Sunrise Stake won two hackathons and received grants
							from the Solana Foundation.
						</p>
					</div>
				</div>
				<div className="my-4">
					<a
						href="https://stakingcentral.com"
						target="_blank"
						className="group float-left"
					>
						<Image
							src="/oss-stakingcentral.png"
							width={180}
							height={180}
							alt="StakingCentral.com"
							className="scale-90 group-active:scale-100 group-focus:scale-100 group-hover:scale-100 transition-transform"
						/>
					</a>
					<div className="grow">
						<h3 className="text-lg font-bold">StakingCentral</h3>
						<p>
							StakingCentral is an independent Solana validator
							explorer and staking interface. It helps users find
							validators, stake or unstake quickly, and share
							validators through a Solana Blink so others can
							stake directly from supported surfaces such as X.
							<br />
							The project was supported by a Superteam grant.
						</p>
					</div>
				</div>
				<div className="flex flex-row justify-center py-12">
					<a
						href="https://github.com/ronnyhaase"
						target="_blank"
						className="inline-block px-16 py-2 border-2 rounded-lg"
					>
						See all
					</a>
				</div>
			</div>
		</>
	);
}

export { OpenSource };
