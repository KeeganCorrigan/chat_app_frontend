export const formatPreviousMessages = (previousMessages) => {
  const formattedMessages = previousMessages.reduce((acc, previousMessage) => {
    let formattedMessage = {
      name: previousMessage.sender_name,
      message: previousMessage.text,
    }
    acc.push(formattedMessage)
    return acc;
  }, [])

  return formattedMessages;
}

export const generateRoomName = (name1, name2) => {
  const sortedNames = [name1, name2].sort()
  return `${sortedNames[0]}${sortedNames[1]}`
}
