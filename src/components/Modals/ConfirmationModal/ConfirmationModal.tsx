interface IConfirmationModal {
	action: () => any
	setIsOpen: (isOpen: boolean) => void
}

export function ConfirmationModal({ action, setIsOpen }: IConfirmationModal) {
	const handleAction = () => {
		action()
		setIsOpen(false)
	}

	return (
		<div className='modalContainer'>
			<h3>Confirm this action</h3>
			<button onClick={handleAction}>Confirm</button>
			<button onClick={() => setIsOpen(false)}>Cancel</button>
		</div>
	)
}
